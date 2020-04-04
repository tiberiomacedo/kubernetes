#!/bin/bash

# Initialize Kubernetes
echo "[TASK 1] Initialize Kubernetes Cluster"
kubeadm init --apiserver-advertise-address=192.168.222.1 --pod-network-cidr=192.168.0.0/16 >> /root/kubeinit.log 2>/dev/null

# Copy Kube admin config
echo "[TASK 2] Copy kube admin config to user .kube directory"
mkdir /home/vivo/.kube
cp /etc/kubernetes/admin.conf /home/vivo/.kube/config
chown -R vivo:vivo /home/vivo/.kube

# Deploy Calico network
echo "[TASK 3] Deploy Calico network"
su - vivo -c "kubectl create -f https://docs.projectcalico.org/v3.9/manifests/calico.yaml"

# Generate Cluster join command
echo "[TASK 4] Generate and save cluster join command to /joincluster.sh"
kubeadm token create --print-join-command > /joincluster.sh
