/*

Codewars, 7k: Help Suzuki rake his garden!



*/

const rakeGarden = garden => garden.split(' ')
                                   .filter(t => t !== 'rock' || t !== 'gravel')
                                   .map(a => a === 'rock' ? a : a !== 'gravel' ? 'gravel' : a)
                                   .join(' ');