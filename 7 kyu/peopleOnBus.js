const number = busStops => {
    return busStops.reduce((acc, curr) => acc + curr[0] - curr[1], 0);
}