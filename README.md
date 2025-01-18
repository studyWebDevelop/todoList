# React + TypeScript + Vite

![스크린샷 2025-01-18 오후 10 27 57](https://github.com/user-attachments/assets/3c5cbd94-79fd-4713-84fd-0bb55f195105)

<h3>TodoList</h3>

TodoList의 기능은 아래와 같습니다.

1. 할 일 조회하기
2. 할 일 추가하기
3. 할 일 수정하기
4. 할 일 삭제하기
5. 할 일 전체 지우기

TodoList는 localStorage를 사용하여 새로고침해도 초기화 되지 않습니다. <br />
전역상태를 자주 사용해서, 이번에는 useState를 사용하여 지역상태로 props를 전달하여 상태를 관리했습니다. <br />
최대한 solid 원칙을 지키려고 노력하였으나 수정하기 기능은 solid원칙이 잘 적용되지 못했습니다. <br />
