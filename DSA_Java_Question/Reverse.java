import java.util.Scanner;

public class Reverse {

    public static int takeInput(String str) {
        Scanner sc = new Scanner(System.in);

        System.out.print(str);
        int input = sc.nextInt();
        return input;

    }

    public static void swap(int arr[], int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }

    public static void reverse(int arr[]) {
        int i = 0;
        int j = arr.length - 1;
        while (i < j) {

            swap(arr, i, j);
            i++;
            j--;

        }

    }

    public static void main(String args[]) {

        int size = takeInput("Enter the size of an array:");
        int arr[] = new int[5];
        for (int i = 0; i < size; i++) {
            arr[i] = takeInput("Enter the element at" + i + " ");
        }
        reverse(arr);
        for (int i : arr) {
            System.out.print(i + " ");
        }

    }

}
