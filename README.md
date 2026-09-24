# CoDeVerse

Plataforma mobile de cursos de tecnologia, desenvolvida com React Native (Expo).

## Tecnologias

- React Native
- Expo SDK 48
- React Navigation (Bottom Tabs)
- AsyncStorage (dados persistidos localmente no dispositivo)

## Como rodar

**Pré-requisitos:**
- Node.js 18+
- App **Expo Go** instalado no celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

```bash
git clone <url-do-repo>
cd coDeVerse/meuprojeto
npm install
npm start
```

Escaneie o QR code com o **Expo Go** — o app abre direto no celular.

## Funcionalidades

- Tela inicial com cursos em destaque e professores recomendados
- Perfil do aluno
- Página de professores
- Lista de tarefas
- Configurações do aplicativo

## Estrutura

```
meuprojeto/
├── src/components/    # Telas e componentes
├── assets/            # Imagens e ícones
└── App.js             # Navegação principal
```
