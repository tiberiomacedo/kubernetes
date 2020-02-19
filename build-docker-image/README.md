## Building a Docker container image 

```bash
$ docker build -t tiberiomacedo/node-web-app:v0.0 .
$ docker login
$ docker push tiberiomacedo/node-web-app:v0.0
```

## Deploying application in Kubernetes

```bash
# 1

# Deployment 
$ kubectl run web-app --image=tiberiomacedo/node-web-app:v0.0 --port=8080

# Expose the Deployment (service)
$ kubectl expose deployment web-app --target-port=8080 --type=NodePort

# Visit the service via NodePort
$ minikube service web-app --url
```
```bash
# 2

# Deployment 
$ kubectl create deployment web-app --image=tiberiomacedo/node-web-app:v0.0

# Expose the Deployment (service)
$ kubectl expose deployment web-app --type=LoadBalancer --port=8080

$ minikube service web-app
```
```bash
# 3

# Deployment 
$ kubectl apply -f deployment.yaml

# Expose the Deployment (service)
$ kubectl apply -f service.yaml
```

## Set up Ingress on Minikube with the NGINX Ingress Controller

```bash
$ kubectl apply -f cluster-ingress.yaml
$ curl web-app.info
```

## Sources
[Hello Minikube](https://kubernetes.io/docs/tutorials/hello-minikube/) \ 
[Use a Service to Access an Application in a Cluster](https://kubernetes.io/docs/tasks/access-application-cluster/service-access-application-cluster/) \
[Set up Ingress on Minikube with the NGINX Ingress Controller](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)

## Other useful commands

```bash
# Runing a Docker container image
$ docker run -p 49160:8080 -d tiberiomacedo/node-web-app:v0.0

# Enter the container
$ docker exec -it <container id> /bin/bash

# Get a Docker container's IP address from the host
$ docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id

# Request an URL
$ curl -i ip:port
```
