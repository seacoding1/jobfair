import { createRouter, createWebHistory } from 'vue-router'
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  { //메인화면 - 로그인페이지
    path: '/',
    name: 'Main',
    component: SignIn
  },
//*********************유저 화면*********************
  {
    path: '/uMainView',
    name: 'uMainView',
    component: () => import('@/views/user/uMainView.vue'),
    props: true
  },
  {//유저 Q&A 리스트화면
    path: '/uQnAView',
    name: 'uQnAView',
    component: () => import('../views/user/uQnAView.vue')
  },
  {//유저 Q&A 작성화면
    path: '/uQnAWriteView/:com_num' ,
    name: 'uQnAWriteView',
    component: () => import('../views/user/uQnAWriteView.vue')
  },
  {//유저 Q&A 디테일 화면
    path: '/uQnADetailView/:qa_num',
    name: 'uQnADetailView',
    component: () => import('../views/user/uQnADetailView.vue')
  },
  {//유저 지원관리 화면
    path: '/uApplyListView',
    name: 'uApplyListView',
    component: () => import('../views/user/uApplyListView.vue')
  },
  {//유저 채용공고 상세화면
    path: '/uJobPostDetailView/:jpl_num',
    name: 'uJobPostDetailView',
    component: () => import('../views/user/uJobPostDetailView.vue')
  },
  {//유저 채용공고 리스트 화면
    path: '/uJobPostView',
    name: 'uJobPostView',
    component: () => import('../views/user/uJobPostView.vue')
  },  
  {//유저 마이페이지 화면
    path: '/uMypageView',
    name: 'uMypageView',
    component: () => import('../views/user/uMypageView.vue')
  },
  {//유저 회원정보 수정화면
    path: '/uModifyView',
    name: 'uModifyView',
    component: () => import('../views/user/uModifyView.vue')
  },
  {//유저 이력서
    path: '/uResumeView',
    name: 'uResumeView',
    component: () => import('../views/user/uResumeView.vue')
  },
  {//유저 이력서 상세보기
    path: '/uResumeDetailView',
    name: 'uResumeDetailView',
    component: () => import('../views/user/uResumeDetailView.vue')
  },
  {//유저 이력서 수정
    path: '/uModiResumeView',
    name: 'uModiResumeView',
    component: () => import('../views/user/uModiResumeView')
  },
//*********************기업 화면*********************
  {//기업 메인화면
    path: '/cMainView',
    name: 'cMainView',
    component: () => import('../views/company/cMainView.vue')
  },
  {//기업 담당자 등록화면
    path: '/cMngRegistView',
    name: 'cMngRegistView',
    component: () => import('../views/company/cMngRegistView.vue')
  },
  {//기업 담당자 수정화면
    path: '/cMngEditView',
    name: 'cMngEditView',
    component: () => import('../views/company/cMngEditView.vue')
  },
  {//기업 마이페이지
    path: '/cMypageView',
    name: 'cMypageView',
    component: () => import('../views/company/cMyPageView.vue')
  },
  {//기업 채용공고 목록 화면
    path: '/cJobPostListView',
    name: 'cJobPostListView',
    component: () => import('../views/company/cJobPostListView.vue')
  },
  {//기업 채용공고 등록 화면
    path: '/cEmpRegView',
    name: 'cEmpRegView',
    component: () => import('../views/company/cEmpRegView.vue')
  },
  {//기업 채용공고 수정 화면
    path: '/cEmpModiView/:jpl_num',
    name: 'cEmpModiView',
    component: () => import('../views/company/cEmpModiView.vue')
  },
  {//기업 채용공고별 지원자 관리 화면
    path: '/cApplyMngView',
    name: 'cApplyMngView',
    component: () => import('../views/company/cApplyMngView.vue')
  },
  {//기업 담당자 승인조회 화면
    path: '/cMngApplyView',
    name: 'cMngApplyView',
    component: () => import('../views/company/cMngApplyView.vue')
  },
  {//기업 큐앤에이 목록 화면
    path: '/cQnAView',
    name: 'cQnAView',
    component: () => import('../views/company/cQnAView.vue')
  },
  {//기업 큐앤에이 상세페이지
    path: '/cQnADetailView/:qa_num',
    name: 'cQnADetailView',
    component: () => import('../views/company/cQnADetailView.vue')
  },
  {//기업 큐앤에이 답변 작성페이지
    path: '/cQnAWriteView/:qa_num',
    name: 'cQnAWriteView',
    component: () => import('../views/company/cQnAWriteView.vue')
  },
  //*********************관리자 화면*********************
  {//관리자 메인화면
    path: '/aMainView',
    name: 'aMainView',
    component: () => import('../views/admin/aMainView.vue')
  },
  {//관리자 참여업체 목록 화면
    path: '/aComListView',
    name: 'aComListView',
    component: () => import('../views/admin/aComListView.vue')
  },
  {//관리자 참여업체 등록 화면(기업관리)
    path: '/aComRegView',
    name: 'aComRegView',
    component: () => import('../views/admin/aComRegView.vue')
  },
  {//관리자 참여업체 수정 화면
    path: '/aComModiView',
    name: 'aComModiView',
    component: () => import('../views/admin/aComModiView.vue')
  },
  {//관리자 참여업체 상세 화면
    path: '/aComDetailView/:com_num',
    name: 'aComDetailView',
    component: () => import('../views/admin/aComDetailView.vue')
  },
  {//관리자 채용공고 조회 화면
    path: '/aJobPostMngView',
    name: 'aJobPostMngView',
    component: () => import('../views/admin/aJobPostMngView.vue')
  },
  {//관리자 통계조회 화면
    path: '/aStatisticView',
    name: 'aStatisticView',
    component: () => import('../views/admin/aStatisticView.vue')
  },
  {//관리자 큐앤에이 리스트
    path: '/aQnAView',
    name: 'aQnAView',
    component: () => import('../views/admin/aQnAView.vue')
  },
  {//관리자 큐앤에이 답변 작성
    path: '/aQnAWriteView/:qa_num',
    name: 'aQnAWriteView',
    component: () => import('../views/admin/aQnAWriteView.vue')
  },
  {//관리자 큐앤에이 디테일
    path: '/aQnADetailView/:qa_num',
    name: 'aQnADetailView',
    component: () => import('../views/admin/aQnADetailView.vue')
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
