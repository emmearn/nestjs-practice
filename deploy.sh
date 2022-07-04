minikube kubectl -- delete service nestjs-practice
minikube kubectl -- delete deployment nestjs-practice

docker build . -t nestjs-practice:v1.0
minikube image load nestjs-practice:v1.0
minikube kubectl -- create deployment nestjs-practice --image=nestjs-practice:v1.0
minikube kubectl -- expose deployment nestjs-practice --type=NodePort --port=3000
sleep 10
minikube kubectl -- port-forward service/nestjs-practice 3000:3000