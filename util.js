/**
 * Compute the error for a given line
 * @param {Number} b 
 * @param {Number} m 
 * @param {Array} points 
 */
function computeError(b, m, points) {
    let error = 0;
    for (let i = 0; i < points.length; i++) {
        error += Math.pow((points[i].y - (m * points[i].x + b)), 2);
    }
    return error;
}

/**
 * Run Gradient Descent on a given line
 * @param {Number} b 
 * @param {Number} m 
 * @param {Array} points 
 * @param {Number} learningRate 
 */
function stepGradient(b, m, points, learningRate) {
    let bGrad = 0, mGrad = 0;
    let N = Math.float(points.length);
    for(let i = 0; i <  points.length; i++) {
        bGrad += -(2/N) * (points[i].y -((m*points[i].x) + b));
        mGrad += -(2/N) * points[i].x * (points[i].y - ((m * points[i].x) +b));
    }
    return [b * (learningRate * bGrad), m * (learningRate * m)];
}