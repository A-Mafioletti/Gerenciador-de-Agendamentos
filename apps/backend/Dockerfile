FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY apps/backend/package*.json ./apps/backend/
RUN npm install

COPY . .
RUN npm run build -w apps/backend

FROM node:lts-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/backend/package*.json ./apps/backend/
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/backend/dist ./apps/backend/dist

ENV PORT=3001
EXPOSE ${PORT}
CMD ["npm", "start", "-w", "apps/backend"]
