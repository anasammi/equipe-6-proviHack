# 🗺 ProviHack do Agora - Equipe 6 - EcoMaps
Projeto desenvolvido para o ProviHack do Agora (Abril/Maio 2022). Para o problema "Como a tecnologia pode combater as mudanças climáticas e seus impactos?" foi desenvolvido a plataforma EcoMaps, que consiste em uma aplicação que auxilia o usuário a trocar a utilização do carro por meios de transporte mais sustentáveis. Para isso foi utilizada a API do Google Maps para obter o trajeto que será percorrido.

## 👥Desenvolvedores:
- Ana Sue Sammi (Fullstack) <a href="https://www.linkedin.com/in/ana-sue-sammi/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></a> 
- Fabiana Leonardo (Produto) <a href="https://www.linkedin.com/in/fabianaleonardo/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></a> 
- Gabriela Hermenegildo Junior (Fullstack) <a href="https://www.linkedin.com/in/gabriela-hermenegildo-jr/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></a>
- Kamila Mota (UX/UI) <a href="https://www.linkedin.com/in/kamila-mota-35226612a/" target="blank"><img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></a>
- Márcio Estevam da Silva (Dados) <a href="https://www.linkedin.com/in/marcio-estevam-da-silva-mes16876/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></a>
- Matheus Susko (UX/UI) <a href="https://www.linkedin.com/in/matheususko/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></a>
- Roberto Maia de Carvalho Junior (Fullstack) <a href="https://www.linkedin.com/in/roberto-maiajr/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></a>

## 🛠 Tecnologias e Ferramentas:
- React JS
- Styled-components
- Google Maps API

## ⚙️ Funcionalidades:
### Splash Screen
Contém um logotipo do produto animado que direciona o usuário diretamente à tela inicial.

### Tela inicial
Tela que contém um botão de "me mostre como", que quando clicado abre um ESPAÇO informando o usuário sobre o que é o aplicativo.
Também há um botão de login, que direciona à tela de login e um de cadastro, que leva à página de cadastro.
### Login
A página de login contém um ícone que representa um usuário, inputs para colocar e-mail e senha e dois botões: uma para realizar o login e outro para voltar à tela inicial.
### Cadastro
Na página de cadastro há um formulário para que o usuário possa cadastrar suas informações, além um botão para realizar o cadastro e outro para voltar para a página inicial.
### Mapa
Tela que contém um mapa, ícones que representam os meios de transporte e inputs para colocar o trajeto a ser seguido. Após escolher o transporte e traçar a rota, aparecem a distância e o tempo da viagem, além de um botão para iniciar o trajeto.
### Páginas de premiação
Após o trajeto ser iniciado na página do mapa, dependendo do meio de transporte escolhido para realizar a rota, o usuário é direcionado a uma das duas páginas de premiação: uma que parabeniza e dá pontos ao usuário e outra que não dá nenhum ponto, caso o transporte escolhido tenha sido o carro.
### Dashboard
Nessa tela podemos ver a pontuação do usuário, os status com informações sobre a quantidade de gás carbônico emitido, a quilometragem percorrida e a quantidade de gás utilizado. Também há uma calculadora de gás carbônico emitido por cada categoria de carro que pode ser escolhida através de um select. 
### Loja
Na loja, o usuário consegue ver seus pontos, que poderão ser utilizados nessa página para serem trocados por produtos cadastrados. Há uma seção dedicada aos patrocinadores e os produtos separados por categoria.

## 👣 Próximos passos:
Queremos criar o backend da aplicação, para que cada usuário tenha um cadastro e login no site, podendo acumular seus pontos e ter uma experiência mais personalizada. No mapa, queremos implementar a rota em tempo real utilizando o GPS do dispositivo móvel do usuário.

## 📸 Imagens:
![splash-screen](https://user-images.githubusercontent.com/94693150/166164297-8af3ff9c-8179-4cd4-9f75-8f7890c23657.png)
![tela-inicial](https://user-images.githubusercontent.com/94693150/166164110-d592bc27-9b90-4423-89f0-57ab2d69e1ce.png)
![tela-inicial-mostre-como](https://user-images.githubusercontent.com/94693150/166164104-903f6a51-d119-400b-ae9e-e50979f2e86d.png)
![cadastro](https://user-images.githubusercontent.com/94693150/166164124-fea362e8-edfc-49b3-a5a5-05bf94dbd116.png)
![login](https://user-images.githubusercontent.com/94693150/166164143-23154cdf-a59b-4c64-9ed3-ff67b40008b1.png)
![mapa](https://user-images.githubusercontent.com/94693150/166164151-31e44d8e-b15e-437e-b182-72fc2316cc10.png)
![mapa-bicicleta](https://user-images.githubusercontent.com/94693150/166164154-43fee589-7f58-4320-8219-af95649f6fbe.png)
![award-page-rosa](https://user-images.githubusercontent.com/94693150/166164156-7d266549-cfb3-4d46-a415-f81e89da6967.png)
![award-page-vermelho](https://user-images.githubusercontent.com/94693150/166164160-13e36e9a-d45c-4810-90d4-8c1bfa3977af.png)
![dashboard-1](https://user-images.githubusercontent.com/94693150/166164166-c8b49f8e-7fa4-4c33-8f88-dc64710e3edf.png)
![dashboard-2](https://user-images.githubusercontent.com/94693150/166164169-3d58f022-0ed2-4987-ab52-6d04ffa402c6.png)
![loja-1](https://user-images.githubusercontent.com/94693150/166164172-b8e60980-9634-495f-92cb-22ddef502957.png)
![loja-2](https://user-images.githubusercontent.com/94693150/166164174-3592572e-ed1f-4f61-8b05-a136a3e6a408.png)
