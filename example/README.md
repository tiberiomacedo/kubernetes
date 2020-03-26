## How to Use Nginx Ingress Controller
```bash

# Start by creating the “mandatory” resources for Nginx Ingress in your cluster.
$ kubectl apply -f mandatory.yaml

# Then, enable the ingress add-on for Minikube.
$ minikube addons enable ingress

# Check that it’s all set up correctly.
$ kubectl get pods --all-namespaces -l app=ingress-nginx

# Create the resources
$ kubectl apply -f apple.yaml
$ kubectl apply -f banana.yaml

# Create the Ingress in the cluster
$ kubectl create -f ingress.yaml

# Let’s check that it’s working. If you’re using Minikube, you might need to replace localhost with 192.168.99.100.
$ curl -kL http://localhost/apple
$ curl -kL http://localhost/banana
$ curl -kL http://localhost/notfound
```

https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-ingress-guide-nginx-example.html