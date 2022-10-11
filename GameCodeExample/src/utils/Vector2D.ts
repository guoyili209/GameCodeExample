export class Vector2D {
    private x: number;
    private y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //returns the magnitude of the vector
    Magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    //returns the distance between two vectors
    Distance(vector: Vector2D) {
        return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2))
    }

    //add with a given vector
    Add(vector: Vector2D) {
        this.x += vector.x;
        this.y += vector.y
    }

    //multiply a vector with a constant
    Multiply(constant: number) {
        this.x *= constant;
        this.y *= constant;
    }

    //return the angle between two vectors in radians
    Dot(vector: Vector2D): number {
        let u = this.Normalize();
        let v = vector.Normalize();
        let dot_v = u.x * v.x + u.y * v.y
        return Math.acos(dot_v)
    }

    //returns the normalized vector
    Normalize(): Vector2D {
        let mag = this.Magnitude();
        let x = this.x / mag;
        let y = this.y / mag;
        return new Vector2D(x, y);
    }
}