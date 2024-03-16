public class Main {
    public static int findHouse(int n) {
        int sumTotal = n * (n + 1) / 2; // Calcula la suma total de todas las casas
        for (int i = 1; i <= n; i++) {
            int sumLeft = i * (i - 1) / 2;
            int sumRight = sumTotal - sumLeft - i;
            if (sumLeft == sumRight) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int result = findHouse(8);
        System.out.println("La casa que cumple con la condición es: " + result); // Salida: 6
    }
}