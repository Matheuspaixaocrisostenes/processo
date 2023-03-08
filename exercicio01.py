def fibonacci(num):
    fib = [0, 1]
    while fib[-1] < num:
        fib.append(fib[-1] + fib[-2])
    if num in fib:
        print(f"O número {num} pertence à sequência de Fibonacci.")
    else:
        print(f"O número {num} não pertence à sequência de Fibonacci.")
    return fib

num = 13
fibonacci_sequence = fibonacci(num)
print(f"A sequência de Fibonacci até {num} é: {fibonacci_sequence}")
