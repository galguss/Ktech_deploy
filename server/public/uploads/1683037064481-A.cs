using System;
using System.Security.Cryptography.X509Certificates;

namespace amirClassA
{
     public class A
    {
        private int num;

        public A(int num)
        {
            this.num = num;
        }

        public override string ToString()
        {
            return $"num";
        }
        static public A[,] AAA(int n)
        {
            A[,] arr = new A[n, n];
            
            for(int row = 0; row < arr.GetLength(0); row++)
            {
                for(int col = 0; col < arr.GetLength(1); col++)
                {
                    arr[row, col] = new A(row+col);
                }
            }
            return arr;
        }
    }
}
