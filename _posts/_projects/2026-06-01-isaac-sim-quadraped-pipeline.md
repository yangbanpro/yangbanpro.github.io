---
layout: default
title: "Isaac Sim 기반 사족 보행 로봇 Sim-to-Real 검증 환경 구축"
date: 2026-06-01
category: projects
image: "[https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800](https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800)"
---

# Isaac Sim 기반 사족 보행 로봇 Sim-to-Real 검증 환경 구축

* **진행 기간**: 2026.04 - 진행 중
* **사용 툴체인**: NVIDIA Isaac Sim, ROS2 Humble, Omniverse, Isaac Lab

물리적 사족 보행 로봇에 RL 가중치를 이식하기 전, 현실과 시뮬레이션 환경 간의 괴리를 좁히기 위한 자율 구동 실증 파이프라인 프로젝트입니다.

<div class="post-card" style="box-shadow: none; background: rgba(0,0,0,0.02); padding: 15px;">
    <strong>핵심 구현 기능:</strong>
    <ul>
        <li>URDF 기반 로봇 모델의 다이내믹스 메쉬 정밀 튜닝</li>
        <li>강화학습 보상 함수(Reward Function) 실시간 모니터링 대시보드 연동</li>
        <li>마찰계수 및 액추에이터 지연 시간 도메인 랜덤화(Domain Randomization) 구성</li>
    </ul>
</div>

### 현재 진행 상황
RaiSim 대비 Isaac Sim이 가지는 강력한 광학 센서 시뮬레이션 이점을 활용하여, 깊이 카메라(Depth Camera) 정보를 고수준 VLA 입력단으로 쏴주는 ROS2 이미지 퍼블리셔 노드 구성을 완료했습니다. 지면 강성 조건 변화에 따른 다리 토크 분배 그래프를 분석 중입니다.
