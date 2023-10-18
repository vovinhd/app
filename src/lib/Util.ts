// move this to another file
export const mapToRange = (x: number,  fromMin= 0.0, fromMax= 1.0, toMin = 0.0, toMax= 1.0) => {
    return toMin + (x - fromMin) * (toMax - toMin) /(fromMax - fromMin)
}
export const clamp = (x: number, min = 0.0, max = 1.0) => {
    return Math.max( min, Math.min(x, max));
}
