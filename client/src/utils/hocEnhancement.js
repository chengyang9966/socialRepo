function hocEnhancement(BaseComponent, props) {
  return function EnhancedComponent() {
    return <BaseComponent props />;
  };
}

export default hocEnhancement;
