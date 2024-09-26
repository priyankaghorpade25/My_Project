package DSA;

import java.util.Stack;

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }

}

class stackarray {
    int arr[];
    int nextindex;

    stackarray() {
        arr = new int[10];
        nextindex = 0;
    }
}

public class Stack1 {

    // Stack implementation using linked list
    // five functiuon related to stack
    // push
    // pop peek isEmpty size
    stackarray s1 = new stackarray();

    static Node head = null;
    static Node tail = null;
    static int s = 0;
    static int nextindex;
    static int arr[] = new int[10];

    public static void PushaddFirst(int data) {
        Node n1 = new Node(data);
        if (s == 0) {
            head = n1;
            tail = n1;

        } else {
            n1.next = head;
            head = n1;

        }
        s++;

    }

    public static int popLL(Node head) {
        if (s == 0) {
            return -1;
        }
        int res = head.data;
        head = head.next;

        s--;
        return res;
    }

    public static int peekLL(Node head) {
        if (s == 0) {
            return -1;
        } else {
            return head.data;
        }
    }

    public static int size(Node head) {
        if (s == 0) {
            return 0;
        }
        return s;
    }

    public static boolean isEmpty(Node head) {
        if (s > 0) {
            return false;
        }
        return true;
    }

    // Stack using array

    public static void arraystackpush(int x) {
        if (nextindex == 0) {
            System.out.print("Invalid");
        }
        arr[nextindex] = x;
        nextindex++;

    }

    public static int poparray() {
        if (nextindex == 0) {
            return -1;
        }
        nextindex--;
        return arr[nextindex];

    }

    public static int peekarray() {
        return arr[nextindex];
    }

    public static int ssizearray() {
        return nextindex;
    }

    public static boolean isempty() {
        if (nextindex == 0) {
            return true;
        }
        return false;
    }

    public static void main(String args[]) {
        // stack using linked list
        // first operation on stack that is push in linked list it is addfirst
        Stack s1 = new Stack();
        PushaddFirst(12);
        PushaddFirst(13);
        PushaddFirst(14);
        PushaddFirst(15);
        PushaddFirst(16);
        PushaddFirst(17);
        PushaddFirst(18);
        System.out.println(popLL(head));
        System.out.println(peekLL(head));

        System.out.println(size(head));
        System.out.println(isEmpty(head));
        arraystackpush(12);
        // arraystackpush(15);

        // arraystackpush(13);

        // arraystackpush(16);

        // // arraystackpush(18);

        // // arraystackpush(19);
        // System.out.println(poparray());
        // System.out.println(peekarray());
        // System.out.println(ssizearray());
        // System.out.println(isempty());

    }

}
