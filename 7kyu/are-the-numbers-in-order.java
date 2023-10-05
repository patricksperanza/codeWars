// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

public class Solution {

  public static boolean isAscOrder(int[] arr) {
 
    boolean ascending = true;
    for (int i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        ascending = false;
      }
    }
    return ascending;
  }

}