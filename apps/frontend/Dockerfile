FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY apps/frontend/package*.json ./apps/frontend/
RUN npm install

COPY . .
RUN npm run build -w apps/frontend

FROM node:lts-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/frontend/package*.json ./apps/frontend/
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/frontend/.next ./apps/frontend/.next

ENV PORT=3000
EXPOSE ${PORT}
CMD ["npm", "start", "-w", "apps/frontend"]
