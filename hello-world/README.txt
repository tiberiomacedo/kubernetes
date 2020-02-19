## 
```bash
#
$ kubectl apply -f dev-namespace.yaml
$ kubectl apply -f dev-default-backend.yaml -n=dev
$ kubectl apply -f dev-nginx-ingress-controller-config-map.yaml -n=dev
$ kubectl apply -f dev-nginx-ingress-controller-deploy.yaml -n=dev
$ kubectl apply -f dev-nginx-ingress-service-account.yaml -n=dev
$ kubectl apply -f dev-nginx-Ingress-cluster-role.yaml -n=dev
$ kubectl apply -f dev-nginx-ingress-cluster-role-binding.yaml -n=dev
$ kubectl apply -f dev-nginx-ingress-controller-service.yaml -n=dev
```

## 
```bash
#
$ kubectl apply -f dev-hello-world-backend-deployment.yaml -n=dev
$ kubectl apply -f dev-hello-world-backend-service.yaml -n=dev
$ kubectl apply -f dev-hello-world-backend-ingress.yaml -n=dev
```
