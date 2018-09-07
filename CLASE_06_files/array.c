#include <stdio.h>
#include <stdlib.h>
#include "utn.h"
#include "array.h"
#define CANTIDAD_EMPLEADOS 6
#define DATO_INVALIDO -1
#define false 0
#define true 1


int array_mostrar(int* pArray, int limite)
{
    int i;
    for(i=0;i<limite;i++)
    {
        printf("\nIndex:%d - Value:%d - Add: %p",i,pArray[i],&pArray[i]);

    }
    return 0;
}


int array_calcularMaximo(int* pArray, int limite, int* pMaximo)
{
    int retorno=-1;
    int i;

    int maximo;
    int flagPrimerMaximo = false;

    if(pArray != NULL && limite > 0)
    {

        for(i=0;i<limite;i++)
        {
            if(pArray[i] != DATO_INVALIDO)
            {
                if(flagPrimerMaximo == false)
                {
                    maximo = pArray[i];
                    flagPrimerMaximo = true;
                }
                else if(pArray[i] > maximo)
                {
                    maximo = pArray[i];
                }
            }
        }

        if(flagPrimerMaximo == 0)
        {
            retorno = -2;
        }
        else
        {
            retorno = 0;
        }
    }
    return retorno;
}


int array_init(int* pArray, int limite, int valor)
{
    int retorno=-1;
    int i;
    if(pArray != NULL && limite > 0)
    {
        for(i=0;i<limite;i++)
        {
            pArray[i] = valor;
        }
        retorno = 0;
    }
    return retorno;

}


int array_ordenar(int* pArray, int limite,int tipoOrden)
{
    int retorno=-1;
    int j;
    int minimoValor;
    int maximoValor;
    int indiceMinimo;
    int indiceMaximo;
    int auxiliarValor;

    if(pArray != NULL && limite > 0)
    {
        for(j=0;j<limite;j++)
        {

            if (tipoOrden==0)
            {
                array_minimoDesde(pArray,limite,j,&minimoValor, &indiceMinimo);
                auxiliarValor=pArray[j];
                pArray[j]=minimoValor;
                pArray[indiceMinimo]=auxiliarValor;
            }
            else
            {
                array_maximoDesde(pArray,limite,j,&maximoValor, &indiceMaximo);
                auxiliarValor=pArray[j];
                pArray[j]=maximoValor;
                pArray[indiceMaximo]=auxiliarValor;


            }

         }
        retorno = 0;
    }
    return retorno;

}

int array_minimoDesde(int* pArray, int limite, int desde,int* pMinimo, int* pIndiceMinimo)
{
    int retorno=-1;
    int i;
    int auxiliarValorMinimo;
    int auxiliarIndiceMinimo;
    if(pArray != NULL && limite >= desde && pMinimo != NULL)
    {
        for(i=desde;i<limite;i++)
        {
            if (i == desde || pArray[i]<auxiliarValorMinimo)
            {
                auxiliarValorMinimo=pArray[i];
                auxiliarIndiceMinimo=i;
            }
        }
        retorno = 0;
        *pMinimo=auxiliarValorMinimo;
        *pIndiceMinimo=auxiliarIndiceMinimo;


    }
    return retorno;

}


int array_maximoDesde(int* pArray, int limite, int desde,int* pMaximo, int* pIndiceMaximo)
{
    int retorno=-1;
    int i;
    int auxiliarValorMaximo;
    int auxiliarIndiceMaximo;
    if(pArray != NULL && limite >= desde && pMaximo != NULL)
    {
        for(i=desde;i<limite;i++)
        {
            if (i == desde || pArray[i]>auxiliarValorMaximo)
            {
                auxiliarValorMaximo=pArray[i];
                auxiliarIndiceMaximo=i;
            }
        }
        retorno = 0;
        *pMaximo=auxiliarValorMaximo;
        *pIndiceMaximo=auxiliarIndiceMaximo;


    }
    return retorno;

}
