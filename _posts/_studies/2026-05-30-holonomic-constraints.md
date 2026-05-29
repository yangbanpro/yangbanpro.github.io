---
layout: default
title: "로봇 동역학에서의 Holonomic 및 Non-holonomic 구속조건 유도"
date: 2026-05-30
category: studies
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800"
---

# 로봇 동역학에서의 Holonomic 및 Non-holonomic 구속조건 유도

사족 보행 로봇의 다리 끝단(End-effector)이 지면과 접촉할 때 발생하는 물리적 제약 조건을 제어 방정식에 투영하기 위해 구속조건(Constraints)의 수학적 성질을 정리합니다.

### 1. 홀로노믹 구속조건 (Holonomic Constraints)
시스템의 구성 좌표(Configuration Coordinates)와 시간만으로 표현할 수 있는 대수적 구속조건입니다. 미분 형태를 취하지 않고 위치 수준에서 시스템의 자유도(DoF)를 직접적으로 감소시킵니다.

$$f(q_1, q_2, \dots, q_n, t) = 0$$

예를 들어, 사족 보행 로봇의 관절 링크 길이가 고정되어 있다는 조건이나 특정 관절이 기계적으로 묶여 있는 경우가 이에 해당합니다.

### 2. 넌홀로노믹 구속조건 (Non-holonomic Constraints)
일반화 속도(Generalized Velocities)에 대한 방정식으로 나타나며, 적분이 불가능하여 위치 방정식으로 변환할 수 없는 구속조건입니다.

$$\sum_{i=1}^{n} a_i(q, t)\dot{q}_i + a_t(q, t) = 0$$

사족 보행 로봇이 미끄러짐 없이 지면을 디뎌야 하는 **Non-slip contact condition**이 대표적인 예시입니다. 속도 제약은 존재하지만 로봇이 도달할 수 있는 작업 공간(Workspace)의 부피 자체를 줄이지는 않기 때문에, 경로 계획(Motion Planning) 시 미분 기하학적 접근이 필요합니다.
