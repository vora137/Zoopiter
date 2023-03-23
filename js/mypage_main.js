function modify() {
  if (window.confirm('수정하시겠습니까?')) {
    console.log('승인');
    location.replace('./mypage_main_modify.html'); //'index.php'
  } else {
    console.log('취소');
    return;
  }
}
// function withdraw() {
//   if (window.confirm('탈퇴하시겠습니까?')) {
//     console.log('승인');
//   } else {
//     console.log('취소');
//   }
// }
function withdraw() {
  Swal.fire({
    title: '탈퇴하시겠습니까?',
    text: '탈퇴확인시 등록된 정보 및 게시글이 전체 삭제 됩니다',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#333',
    cancelButtonColor: '#ffd88f',
    confirmButtonText: '탈퇴하기',
  }).then(result => {
    if (result.isConfirmed) {
      Swal.fire('탈퇴완료!', '그동안 이용해주셔서 감사합니다', 'success');
    }
  });
}
