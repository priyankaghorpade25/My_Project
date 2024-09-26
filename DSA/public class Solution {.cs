public class Solution {

    public static void merge(int arr[], int l, int r)
        {
           //midpoint
            int m=(l+r)/2;
            int n1 = m - l + 1;
            int n2 = r - m;
     
           
            int arr1[] = new int[n1];
            int arr2[] = new int[n2];
           
     
           //two subarray
            for (int i = 0; i < n1; ++i)
                arr1[i] = arr[l + i];
            for (int j = 0; j < n2; ++j)
                arr2[j] = arr[m + 1 + j];
     
           
            int i = 0, j = 0;
     
            // Initial index of merged subarray array
            int k = l;
             while (i < arr1.length && j < arr2.length) {
                if (arr1[i] < arr2[j]) {
                    arr[k] = arr1[i];
                    i++;
    
                    k++;
                } else {
                    arr[k] = arr2[j];
                    j++;
                    k++;
                }
    
            }
            while (i < arr1.length) {
    
                arr[k] = arr1[i];
                i++;
                k++;
    
            }
            while (j < arr2.length) {
    
                arr[k] = arr2[j];
                k++;
                j++;
    
            }
        }
    
         public static void mergeSort(int[] arr, int l, int r){
            // Write your code here
           
           if (l < r) {
     
     
                // Find the middle point
                int m = (l + r) / 2;
     
                // Sort first and second halves
                mergeSort(arr, l, m);
                mergeSort(arr, m + 1, r);
     
                // Merge the sorted halves
                merge(arr, l, r);
            }
        }
    }
    