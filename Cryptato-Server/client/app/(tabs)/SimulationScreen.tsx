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
import { LineChart } from 'react-native-chart-kit';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { Ionicons } from '@expo/vector-icons';
import BottomToolbar from '@/components/BottomToolBar';
import { useRouter } from 'expo-router';
import { obtenerDatosGraficos } from '../../hooks/request';

const screenWidth = Dimensions.get('window').width;

export default function SimulationScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const router = useRouter();

  const [crypto, setCrypto] = useState('BTC');
  const [showCryptoPicker, setShowCryptoPicker] = useState(false);
  const [amount, setAmount] = useState('');
  const [priceTotal, setPriceTotal] = useState('');
  const [selectedRange, setSelectedRange] = useState('1D');
  const [chartData, setChartData] = useState([0, 0, 0, 0, 0]);
  const [chartLabels, setChartLabels] = useState(['', '', '', '', '']);

 

  const rangeToInterval: Record<string, string> = {
    '1H': '5m',
    '1D': '2h',
    '1W': '1d',
    '1M': '1w',
    '1Y': '1M',
  };

  useEffect(() => {
    const fetchGraphicData = async () => {
      try {
        const rawData = await obtenerDatosGraficos(`${crypto}USDT`, 8, rangeToInterval[selectedRange]);
        const values = rawData.map(point => parseFloat(point[4]));
        const labels = rawData.map(point => {
          const date = new Date(point[0]);
          switch (selectedRange) {
            case '1H':
              return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // ej. "14:30"
            case '1D':
              return date.toLocaleTimeString([], { hour: '2-digit' }); // ej. "14"
            case '1W':
              return date.toLocaleDateString([], { weekday: 'short' }); // ej. "Mon"
            case '1M':
              return date.toLocaleDateString([], { day: '2-digit', month: '2-digit' }); // ej. "04/05"
            case '1Y':
              return date.toLocaleDateString([], { month: 'short' }); // ej. "May"
            default:
              return '';
          }
        });
        

        setChartData(values);
        setChartLabels(labels);
      } catch (error) {
        console.error('Error al obtener datos de gráfica:', error);
        setChartData([0, 0, 0, 0, 0]);
        setChartLabels(['', '', '', '', '']);
      }
    };

    fetchGraphicData();
  }, [crypto, selectedRange]);

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
              onChangeText={setAmount}
            />
            <View style={{ position: 'relative' }}>
              <TouchableOpacity
                style={[styles.selector, styles.fixedSelector]}
                onPress={() => setShowCryptoPicker(prev => !prev)}
              >
                <Text style={styles.selectorText}>{crypto}</Text>
                <Ionicons name="chevron-down" size={16} color="#fff" />
              </TouchableOpacity>
              {showCryptoPicker && (
                <View style={styles.dropdownOverlay}>
                  {['BTC', 'ETH', 'DOT', 'ATOM', 'SOL'].map(item => (
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
              onChangeText={setPriceTotal}
            />
            <TouchableOpacity style={styles.selector}>
              <Text style={styles.selectorText}>$MXN</Text>
              <Ionicons name="chevron-down" size={16} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={[styles.label, { color: Colors[colorScheme].text }]}>Precio total</Text>
          <TextInput
            style={[styles.inputFull, { color: Colors[colorScheme].text, backgroundColor: Colors[colorScheme].cardBackground, borderColor: Colors[colorScheme].primary }]}
            editable={false}
            value=""
          />

          <Text style={[styles.label, { color: Colors[colorScheme].text }]}>Selecciona el período</Text>
          <View style={styles.rangeButtonGroup}>
            {['1H', '1D', '1W', '1M', '1Y'].map((range) => (
              <TouchableOpacity
                key={range}
                style={[styles.rangeButton, { backgroundColor: selectedRange === range ? Colors[colorScheme].primary : Colors[colorScheme].cardBackground }]}
                onPress={() => setSelectedRange(range)}
              >
                <Text style={{ color: selectedRange === range ? '#fff' : Colors[colorScheme].text, fontFamily: Fonts.medium }}>
                  {range}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={[styles.label, { color: Colors[colorScheme].text }]}>Revisa la gráfica</Text>
          <LineChart
            data={{ labels: chartLabels, datasets: [{ data: chartData }] }}
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
    justifyContent: 'space-between',
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