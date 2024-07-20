
package DSA;

import java.util.Scanner;

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedList {
    static Node head;
    static Node tail;
    static int s;

    public static Node CreateLinkedlist() {
        Scanner sc = new Scanner(System.in);
        int data = sc.nextInt();

        Node n1 = new Node(data);
        while (data != -1) {
            if (head == null) {
                head = n1;
                tail = n1;

            } else {
                tail.next = n1;
                tail = tail.next;
            }
            data = sc.nextInt();
        }
        return head;

    }

    public static void Print() {
        Node temp = head;
        while (temp != null) {

            System.out.print(temp.data + "->");
            temp = temp.next;

        }
    }

    public static void Addfirst(int data) {
        Node n1 = new Node(data);
        // int s;
        if (s == 0) {
            head = n1;
            tail = n1;
        } else {
            n1.next = head;
            head = n1;
        }
        s++;
    }

    public static void addLast(int data) {
        Node n1 = new Node(data);
        if (s == 0) {
            head = n1;
            tail = n1;
        } else {
            tail.next = n1;
            tail = n1;
        }
        s++;
    }

    public static void Removefirst() {
        // Node n1 = new Node(12);

        if (s == 0) {
            System.out.println("Empty Linked list");
        } else if (s == 1) {
            head = null;
            tail = null;

        } else {
            head = head.next;

        }
        s--;
    }

    public static void Removelast() {
        if (s == 0) {
            System.out.println("Empty linked list");
        } else if (s == 1) {
            head = null;
            tail = null;

        } else {
            Node temp = head;
            while (temp.next != tail) {
                temp = temp.next;

            }
            temp.next = null;
            tail = temp;

        }
        s--;

    }

    public static void Insert(int data, int pos) {
        int count = 0;
        Node n1 = new Node(data);
        Node temp = head;
        if (s == 0) {

        }
        while (count < pos - 1 && temp != null) {
            temp = temp.next;
            count++;
        }
        if (temp == null) {

        }
        n1.next = temp.next;
        temp.next = n1;

    }

    public static void Delete(int pos) {
        int count = 0;
        Node temp = head;
        if (s == 0) {

        }
        while (count < pos - 1 && temp != null) {
            temp = temp.next;
            count++;
        }
        if (temp == null || temp.next == null) {
            return;
        }
        temp.next = temp.next.next;
    }

    public static void middleelement(Node head) {
        Node temp = head;
        int count = 0;
        while (temp != null) {
            temp = temp.next;
            count++;
        }
        System.out.print(count);
    }

    public static void midofelement(Node head) {
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        System.out.println(slow.data);
    }

    public static boolean cyclelist(Node head) {
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }
        return false;

    }

    public static void main(String args[]) {
        // Node head = CreateLinkedlist();
        Addfirst(20);
        Addfirst(10);
        Addfirst(35);
        addLast(30);
        addLast(24);
        addLast(45);
        addLast(13);

        Print();
        Removefirst();

        Removelast();
        System.out.println();
        // Print();
        // Insert(67, 3);
        System.out.println();
        // Print();
        // Delete(2);
        System.out.println();
        Print();
        System.out.println();
        addLast(30);

        addLast(45);
        Print();
        System.out.println();
        middleelement(head);
        System.out.println();
        midofelement(head);
        // head.next.next.next.next.next.next.next = ;
        System.out.println(cyclelist(head));

    }

}
