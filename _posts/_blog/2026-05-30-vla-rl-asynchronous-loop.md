---
layout: default
title: "VLA 모델과 저수준 RL 제어기 간의 비동기 제어 루프 설계 고민"
date: 2026-05-29
category: blog
image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800"
---

# VLA 모델과 저수준 RL 제어기 간의 비동기 제어 루프 설계 고민

최근 로보틱스 분야에서 거대 비전-언어-행동(Vision-Language-Action) 모델을 물리적 로봇에 이식하려는 시도가 활발합니다. 랩실에서 기존에 확보한 사족 보행 로봇의 강화학습(RL) 모터 제어 데이터셋을 활용해 고수준 명령 레이어와 결합하는 아키텍처를 고민 중입니다.

### 1. 주파수 불일치(Frequency Mismatch) 문제
가장 큰 병목은 제어 주기의 차이입니다.
* **고수준 VLA 레이어**: 카메라 입력 및 상황 판단 처리 (보통 $5 \sim 15\text{ Hz}$)
* **저수준 RL 제어기**: 동적 안정성을 위한 실시간 토크 제어 (최소 $200 \sim 500\text{ Hz}$)

이 두 시스템을 동기(Synchronous) 방식으로 묶으면 고수준 모델이 추론하는 동안 로봇이 중심을 잃고 쓰러지게 됩니다. 

### 2. 비동기식 큐(Queue) 아키텍처 도입
따라서 ROS2의 비동기 노드 통신을 활용하여, VLA는 수시로 태스크 목표 상태(Desired State Vector)를 업데이트하고, 저수준 RL Reflex 모듈은 고유수용감각(Proprioception) 피드백을 받아 독립적으로 $500\text{ Hz}$ 루프를 돌리는 계층적 큐 시스템 프로토타입을 설계하고 있습니다. Sim-to-Real 환경에서 지연 시간(Latency)이 보행 안정성에 미치는 임계점을 정량화하는 것이 다음 목표입니다.
