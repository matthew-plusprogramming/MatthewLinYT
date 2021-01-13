let isDarkMode = false;

document.documentElement.onclick = () => {
  isDarkMode = !isDarkMode;

  const documentElementStyle = document.documentElement.style;
  const documentElementComputedStyle = getComputedStyle(
    document.documentElement,
  );
  if (isDarkMode) {
    documentElementStyle.setProperty(
      '--header-color',
      documentElementComputedStyle.getPropertyValue('--dark-header-color'),
    );
    documentElementStyle.setProperty(
      '--nav-element-color',
      documentElementComputedStyle.getPropertyValue('--dark-nav-element-color'),
    );
    documentElementStyle.setProperty(
      '--footer-color',
      documentElementComputedStyle.getPropertyValue('--dark-footer-color'),
    );
    documentElementStyle.setProperty(
      '--main-color',
      documentElementComputedStyle.getPropertyValue('--dark-main-color'),
    );
    documentElementStyle.setProperty(
      '--inverse-main-color',
      documentElementComputedStyle.getPropertyValue('--light-main-color'),
    );
  } else {
    documentElementStyle.setProperty(
      '--header-color',
      documentElementComputedStyle.getPropertyValue('--light-header-color'),
    );
    documentElementStyle.setProperty(
      '--nav-element-color',
      documentElementComputedStyle.getPropertyValue(
        '--light-nav-element-color',
      ),
    );
    documentElementStyle.setProperty(
      '--footer-color',
      documentElementComputedStyle.getPropertyValue('--light-footer-color'),
    );
    documentElementStyle.setProperty(
      '--main-color',
      documentElementComputedStyle.getPropertyValue('--light-main-color'),
    );
    documentElementStyle.setProperty(
      '--inverse-main-color',
      documentElementComputedStyle.getPropertyValue('--dark-main-color'),
    );
  }
};
