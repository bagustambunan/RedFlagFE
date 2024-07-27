const useUser = () => {
  const token = localStorage.getItem('token');

  return {
    token,
    isLogin: !!token,
  }
}

export default useUser;
