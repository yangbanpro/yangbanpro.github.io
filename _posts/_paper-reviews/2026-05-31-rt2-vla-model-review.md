---
layout: default
title: "[리뷰] RT-2: Vision-Language-Action Models Transfer to Web Knowledge"
date: 2026-05-31
category: paper-reviews
image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800"
---

# [리뷰] RT-2: Vision-Language-Action Models Transfer to Web Knowledge

* **Authors**: Google DeepMind
* **Venue**: CoRL 2023

Embodied AI 아키텍처의 근간이 되는 구글 딥마인드의 RT-2 논문을 분석합니다. 이 논문은 웹 데이터로 학습된 대형 멀티모달 모델(VLM)을 로봇의 고수준 인지와 저수준 궤적 제어 파트까지 직접 매핑할 수 있음을 보여주었습니다.

### 핵심 기여 요약
1. **토큰화의 통일**: 로봇의 엔드 이펙터 위치 변화량 및 그리퍼 상태(Action)를 텍스트 코퍼스와 동일하게 문자열 토큰으로 이산화(Discretization)하여 VLM의 출력 어휘 집합(Vocabulary)에 통합했습니다.
2. **이머전트 기능(Emergent Capabilities)**: 직접 학습하지 않은 사물이나 개념에 대해서도 웹 지식을 기반으로 추론하여 정확한 로봇 궤적 명령어를 뱉어내는 창발적 일반화 성능을 보여줍니다.

### 비판적 시각 및 사족 보행 로봇 적용성
RT-2는 머니퓰레이터의 느린 궤적 제어($3\text{ Hz} \sim 5\text{ Hz}$)에는 적합하지만, 환경 섭동에 실시간으로 대응해야 하는 quadruped 로봇의 모터 제어 루프에 다이렉트로 토큰 아웃풋을 쏘는 것은 물리적으로 불가능합니다. 따라서 이를 높은 대역폭의 RL Policy와 연결하는 계층적 제어 브릿지 연구가 필수적임을 시사합니다.
