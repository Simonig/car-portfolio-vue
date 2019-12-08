const SUPPORTED_EXTENSIONS = ['png', 'jpg', 'jpeg'];

export function isSupportedType(imagePath: string): boolean {
  const strArr = imagePath.split('.');
  return SUPPORTED_EXTENSIONS.includes(strArr[strArr.length - 1]);
}
