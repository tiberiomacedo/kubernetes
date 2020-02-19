## Building a Docker container image
```bash
$ docker build -t tiberiomacedo/hello-world-backend:v1.0.0 .
$ docker login
$ docker push tiberiomacedo/hello-world-backend:v1.0.0
```

## Deploying application in Kubernetes
```bash
# Deployment 
$ kubectl apply -f hello-world-backend-deployment-dev.yaml

# Expose the Deployment (service)
$ kubectl apply -f hello-world-backend-service-dev.yaml
```

## Set up Ingress on Minikube with the NGINX Ingress Controller
```bash
$ kubectl apply -f hello-world-backend-ingress-dev.yaml
$ curl prod-hello-world-backend.com.br/hwbff
```
