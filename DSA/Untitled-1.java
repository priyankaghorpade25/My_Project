/*

    Following is the Node class already written for the Linked List

    class Node<T> {
        T data;
        Node<T> next;
    
        public Node(T data) {
            this.data = data;
        }
    }

*/

public class Solution {
    public static Node<Integer> mergetwosortLL(Node<Integer>head1,Node<Integer>head2){
        if(head1==null){
            return head2;
        }
        if(head2==null){
            return head1;
        }
        Node<Integer>d=new Node<>(-1);
        Node<Integer>t=d;
        Node<Integer>h1=head1;
        Node<Integer>h2=head2;
        while(h1!=null && h2!=null){
            if(h1.data<=h2.data){
                t.next=h1;
                t=t.next;
                h1=h1.next;
            }
            else{
                t.next=h2;
                t=t.next;
                h2=h2.next;
            }

        }
        if(h1==null){
            t.next=h2;
        }
        if(h2==null){
            t.next=h1;
        }
        return d.next;

    }

    public static Node<Integer>midofLL(Node<Integer>head){
        Node<Integer>slow=head;
        Node<Integer>fast=head;
        if(head==null ||head.next==null ){
            return head;
        }
        while(fast.next!=null && fast.next.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;

    }

	public static Node<Integer> mergeSort(Node<Integer> head) {
		//Your code goes here
        if(head==null || head.next==null){
            return head;
        }
        Node<Integer>mid=midofLL(head);
        Node<Integer>head1=head;
        Node<Integer>head2=mid.next;
        mid.next=null;
        head1=mergeSort(head1);
        head2=mergeSort(head2);
        head=mergetwosortLL(head1, head2);
        return head;

	}

}