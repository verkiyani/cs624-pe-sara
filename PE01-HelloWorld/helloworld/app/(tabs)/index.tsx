import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function HelloWorldScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Sara Verkiyani</ThemedText>
      <ThemedText style={styles.text}>MSCS</ThemedText>
      <ThemedText style={styles.text}>STC</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
