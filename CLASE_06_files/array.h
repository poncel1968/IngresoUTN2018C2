
#ifndef ARRAY_H_INCLUDED
#define ARRAY_H_INCLUDED



    int array_mostrar(int* pArray, int limite);
    int array_calcularMaximo(int* pArray, int limite, int* pMaximo);
    int array_init(int* pArray, int limite, int valor);
    int array_ordenar(int* pArray, int limite,int tipoOrden);
    int array_minimoDesde(int* pArray, int limite, int desde,int* pMinimo, int* pIndiceMinimo);
    int array_maximoDesde(int* pArray, int limite, int desde,int* pMaximo, int* pIndiceMaximo);
    void array_swap(int* elementoA,int* elementoB);

#endif // UTN_H_INCLUDED





