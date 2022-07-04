kompose convert -f docker-compose.yml
minikube kubectl -- apply -f postgres-service.yaml,postgres-deployment.yaml
sleep 10
minikube kubectl -- port-forward service/postgres 5432:5432