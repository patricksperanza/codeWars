public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] arr) {
      int smallest = arr[0];
      for (int num : arr) {
        if (num < smallest) {
          smallest = num;
        }
      }
        return smallest;
    }
}