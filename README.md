# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Interface do usuário (UI)](#3-interface-do-usuário-(UI))

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Neste projeto o usuário pode cifrar e decifrar um texto indicando a chave de deslocamento (_offset_). É possível cifrar e decifrar letras maiúsculas e minúsculas. Os caracteres especiais, pontuações e números permanecem iguais. A chave de deslocamento utilizada pode ser positiva ou negativa.
O projeto foi estruturado em HTML5, a lógica foi implementada em JavaScript(ES6) e estilizado em CSS.

## 3. Interface do usuário (UI)

A interface permite que usuário:

* Elega um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserira uma mensagem (texto).
* Escolha a opção desejada (codificar ou descodificar).
* Veja o resultado.