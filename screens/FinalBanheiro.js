import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FinalBanheiro = ({ route, navigation }) => {
  const { piaValue, descargaValue } = route.params; // Recebendo os valores das telas anteriores

  const consumoTotal = ((piaValue * 7 * 30) + (descargaValue * 7 * 30)).toFixed(2); // Cálculo do consumo total
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Consumo no Banheiro</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo Pia: { (piaValue * 7 * 30).toFixed(2) } L/mês</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo Descarga: { (descargaValue * 7 * 30).toFixed(2) } L/mês</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo Total: {consumoTotal} L/mês</Text>
      </View>

      <Text style={styles.tipsTitle}>Dicas para economizar no banheiro:</Text>
      <View style={styles.tips}>
        <Text style={styles.tipText}>- Feche a torneira enquanto escova os dentes.</Text>
        <Text style={styles.tipText}>- Tome banhos mais curtos.</Text>
        <Text style={styles.tipText}>- Use o modo econômico da descarga.</Text>
      </View>

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  cardText: {
    fontSize: 18,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  tips: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  tipText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default FinalBanheiro;
