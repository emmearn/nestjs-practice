# Practice project for to learn nest js deployed on minikube

## Requisition
* Kompose
* npm/yarn
* NodeJs
* docker

## Startup
```bash
$ dockerd
$ minikube start
```

## Monitoring
You can open minikube dashboard with:
```bash
$ minikube dashboard --url
```
and also monitoring the internal minikube docker with:
```bash
$ minikube ssh
docker@minikube:~$ docker image ls
```

## Database
```bash
$ postgres-docker/deploy.sh
```

## Backend

```bash
$ deploy.sh
```