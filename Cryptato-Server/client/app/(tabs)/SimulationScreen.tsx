import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart } from 'react-native-chart-kit';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { Ionicons } from '@expo/vector-icons';
import BottomToolbar from '@/components/BottomToolBar';
import { useRouter } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

export default function SimulationScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const router = useRouter();

  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('MXN');
  const [crypto, setCrypto] = useState('BTC');
  const [priceTotal, setPriceTotal] = useState('0');
  const [showCryptoPicker, setShowCryptoPicker] = useState(false);
  const [selectedRange, setSelectedRange] = useState('1D');

  const cryptoOptions = ['BTC', 'ETH', 'DOT', 'ATOM', 'SOL'];

  const mockPrice = 250000;

  const calculateTotal = (value: string) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setPriceTotal((numericValue * mockPrice).toFixed(2));
    } else {
      setPriceTotal('0');
    }
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
    calculateTotal(value);
  };

  const handleCurrencyChange = (value: string) => {
    setPriceTotal(value);
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setAmount((numericValue / mockPrice).toFixed(6));
    } else {
      setAmount('0');
    }
  };

  // Chart data state
  const [chartData, setChartData] = useState<number[]>([]);
  const [chartLabels, setChartLabels] = useState<string[]>([]);

  // Fetch chart data based on selectedRange and crypto
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(
          `http://192.168.101.110:8081/api/historical?symbol=${crypto}USDT&range=${selectedRange}`
        );
        const data = await response.json();
        // Assume data = [{ time: '7:00', value: 120 }, ...]
        const values = data.map((point: any) => point.value);
        const times = data.map((point: any) => point.time);
        setChartData(values);
        setChartLabels(times);
      } catch (error) {
        console.error('Error fetching chart data:', error);
        setChartData([]);
        setChartLabels([]);
      }
    };
    fetchChartData();
  }, [selectedRange, crypto]);

  const chartDataObject = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.replace('/LearningScreen')} style={styles.backIcon}>
              <Ionicons name="chevron-back" size={24} color={Colors[colorScheme].primary} />
            </TouchableOpacity>
            <Text style={[styles.title, { color: Colors[colorScheme].primary }]}>Realiza la configuración</Text>
            <View style={styles.iconRow}>
              <Ionicons name="settings-outline" size={24} color={Colors[colorScheme].primary} />
              <Ionicons name="person-circle-outline" size={24} color={Colors[colorScheme].primary} />
            </View>
          </View>

          <Text style={[styles.label, { color: Colors[colorScheme].text }]}>Elige la cripto a comprar</Text>
          <View style={styles.row}>
            <TextInput
              placeholder="0"
              placeholderTextColor="#999"
              keyboardType="numeric"
              inputMode="decimal"
              style={[styles.input, { color: Colors[colorScheme].text, backgroundColor: Colors[colorScheme].cardBackground }]}
              value={amount}
              onChangeText={(value) => {
                const numeric = value.replace(/[^0-9.]/g, '');
                handleAmountChange(numeric);
              }}
            />
            <View style={{ position: 'relative' }}>
              <TouchableOpacity
                style={[styles.selector, styles.fixedSelector]}
                onPress={() => setShowCryptoPicker((prev) => !prev)}
              >
                <Text style={styles.selectorText}>{crypto}</Text>
                <Ionicons name="chevron-down" size={16} color="#fff" />
              </TouchableOpacity>
              {showCryptoPicker && (
                <View style={styles.dropdownOverlay}>
                  {cryptoOptions.map((item) => (
                    <TouchableOpacity
                      key={item}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setCrypto(item);
                        setShowCryptoPicker(false);
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>

          <Text style={[styles.label, { color: Colors[colorScheme].text }]}>Elige la moneda</Text>
          <View style={styles.row}>
            <TextInput
              placeholder="0"
              placeholderTextColor="#999"
              keyboardType="numeric"
              inputMode="decimal"
              style={[styles.input, { color: Colors[colorScheme].text, backgroundColor: Colors[colorScheme].cardBackground }]}
              value={priceTotal}
              onChangeText={(value) => {
                const numeric = value.replace(/[^0-9.]/g, '');
                handleCurrencyChange(numeric);
              }}
            />
            <TouchableOpacity style={styles.selector}>
              <Text style={styles.selectorText}>${currency}</Text>
              <Ionicons name="chevron-down" size={16} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={[styles.label, { color: Colors[colorScheme].text }]}>Precio total</Text>
          <TextInput
            style={[styles.inputFull, { color: Colors[colorScheme].text, backgroundColor: Colors[colorScheme].cardBackground, borderColor: Colors[colorScheme].primary }]}
            editable={false}
            value={priceTotal}
          />

          <Text style={[styles.label, { color: Colors[colorScheme].text }]}>Selecciona el período</Text>
          <View style={styles.rangeButtonGroup}>
            {['1H', '1D', '1W', '1M', '1Y'].map((range) => (
              <TouchableOpacity
                key={range}
                style={[
                  styles.rangeButton,
                  {
                    backgroundColor:
                      selectedRange === range ? Colors[colorScheme].primary : Colors[colorScheme].cardBackground,
                  },
                ]}
                onPress={() => setSelectedRange(range)}
              >
                <Text
                  style={{
                    color: selectedRange === range ? '#fff' : Colors[colorScheme].text,
                    fontFamily: Fonts.medium,
                  }}
                >
                  {range}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={[styles.label, { color: Colors[colorScheme].text }]}>Revisa la gráfica</Text>
          <LineChart
            data={chartDataObject}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: Colors[colorScheme].background,
              backgroundGradientFrom: Colors[colorScheme].background,
              backgroundGradientTo: Colors[colorScheme].background,
              decimalPlaces: 0,
              color: () => Colors[colorScheme].primary,
              labelColor: () => Colors[colorScheme].text,
              propsForDots: {
                r: '4',
                strokeWidth: '2',
                stroke: Colors[colorScheme].primary,
              },
            }}
            bezier
            style={styles.chart}
          />
        </View>
      </ScrollView>
      <BottomToolbar activeTab="Simulation" onTabPress={(tab) => console.log(tab)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  backIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.bold,
    flex: 1,
  },
  iconRow: {
    flexDirection: 'row',
    gap: 15,
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.bold,
    marginBottom: 6,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  inputFull: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#333',
  },
  fixedSelector: {
    width: 95,
    justifyContent: 'space-between'
  },
  selectorText: {
    color: '#fff',
    fontFamily: Fonts.medium,
    marginRight: 6,
  },
  chart: {
    borderRadius: 12,
    marginVertical: 20,
  },
  pickerContainer: {
    width: 100,
    borderRadius: 10,
    overflow: 'hidden',
  },
  dropdownOverlay: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    zIndex: 999,
    marginTop: 5,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  dropdownItemText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
  rangeButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    flexWrap: 'wrap',
    gap: 8,
  },
  rangeButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
});