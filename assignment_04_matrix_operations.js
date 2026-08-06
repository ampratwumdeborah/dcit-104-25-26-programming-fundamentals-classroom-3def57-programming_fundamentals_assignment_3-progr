// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
const readlineSync = require("readline-sync");

function readMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question("Enter row " + (i + 1) + ": ");
        matrix.push(row.split(" ").map(Number));
    }

    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

function transposeMatrix(matrix) {
    let result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];

        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
}

function addMatrices(matrix1, matrix2) {
    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

function multiplyMatrices(matrix1, matrix2) {
    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;

            for (let k = 0; k < matrix2.length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }

            result[i][j] = sum;
        }
    }

    return result;
}

function main() {
    console.log("PART A - Transpose Matrix");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols);

    console.log("\nOriginal Matrix:");
    printMatrix(matrix);

    console.log("\nTransposed Matrix:");
    printMatrix(transposeMatrix(matrix));

    console.log("\nPART B - Add Two Matrices");

    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");

    console.log("Enter Matrix 1");
    let matrix1 = readMatrix(rows, cols);

    console.log("Enter Matrix 2");
    let matrix2 = readMatrix(rows, cols);

    console.log("\nSum Matrix:");
    printMatrix(addMatrices(matrix1, matrix2));

    console.log("\nPART C - Multiply Two Matrices");

    let m = readlineSync.questionInt("Rows of Matrix A: ");
    let n = readlineSync.questionInt("Columns of Matrix A: ");
    let p = readlineSync.questionInt("Columns of Matrix B: ");

    console.log("Enter Matrix A");
    let matrixA = readMatrix(m, n);

    console.log("Enter Matrix B");
    let matrixB = readMatrix(n, p);

    console.log("\nProduct Matrix:");
    printMatrix(multiplyMatrices(matrixA, matrixB));
}

main();

// =============================================================================

const readlineSync = require('readline-sync');

