# Usar Node.js como base
FROM node:16

# Criar o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto
COPY package.json ./
COPY app.js ./

# Instalar as dependências
RUN npm install

# Expor a porta do backend
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
