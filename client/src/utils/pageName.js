function pageName(params) {
  if (window.location.pathname === params) {
    return true;
  }
  return false;
}

export default pageName;
