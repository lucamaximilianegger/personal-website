# Build the project
FROM node:lts AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

# Serve the built static files
FROM node:lts AS runner
WORKDIR /app
RUN npm install -g http-server
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Serve the static files with fallback to index.html
CMD ["http-server", "dist", "-p", "3000", "--proxy", "http://localhost:3000?"]
