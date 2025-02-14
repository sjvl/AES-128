//        const visualizeState = (state) => {                                                          //HIDE
//             const values = [...state];                                                               //HIDE
//             let criptografik = values.map(v => v < 85 ? '░░' : v < 170 ? '▒▒' : '██').join('');      //HIDE
//             canvasElement.textContent += `${criptografik}\n`;                                        //HIDE
//         };                                                                                           //HIDE
//                                                                                                         HIDE
//         const visualizeState = (state) => {                                                          //HIDE
//               const shades = ' ░▒▓█▉▊▋';  // 8 niveaux de "gris"                                     //HIDE
//               const values = [...state];                                                             //HIDE
//               let criptografik = values.map(v => shades[Math.floor(v * 7 / 255)].repeat(2)).join('');//HIDE
//               canvasElement.textContent += `${criptografik}\n`;                                      //HIDE
//         };                                                                                           //HIDE
//                                                                                                         HIDE
//         const visualizeState = (state) => {                                                          //HIDE
//               const shades = ' ░▁▂▃▄▅▆▇█▀▔▏▎▍▌▋';  // 16 niveaux alternatifs                         //HIDE
//               const values = [...state];                                                             //HIDE
//               let criptografik = values.map(v => shades[Math.floor(v * 15 / 255)].repeat(2)).join('');//HIDE
//               canvasElement.textContent += `${criptografik}\n\n`;                                    //HIDE
//         };                                                                                           //HIDE
//                                                                                                         HIDE
//         const visualizeState = (state) => {                                                             //HIDE
//             // Si c'est le premier appel, créer le SVG                                                  //HIDE
//             if (!canvasElement.querySelector('svg')) {                                                  //HIDE
//                 const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");              //HIDE
//                 svg.setAttribute("viewBox", "0 0 148 210");                                             //HIDE
//                 svg.style.width = "148px";                                                              //HIDE
//                 svg.style.height = "210px";                                                             //HIDE
//                 svg.style.backgroundColor = "#f0f0f0";                                                  //HIDE
//                                                                                                         //HIDE
//                 // Calculer et stocker le centre basé sur les premières valeurs                         //HIDE
//                 let centerX = (state[0] / 255) * 148 ;                                                  //HIDE
//                 let centerY = (state[1] / 255) * 210 ;                                                  //HIDE
//                 svg.dataset.centerX = centerX;                                                          //HIDE
//                 svg.dataset.centerY = centerY;                                                          //HIDE
//                                                                                                         //HIDE
//                 canvasElement.appendChild(svg);                                                         //HIDE
//             }                                                                                           //HIDE
//                                                                                                         //HIDE
//             const svg = canvasElement.querySelector('svg');                                             //HIDE
//             const values = [...state];                                                                  //HIDE
//             const numberOfArcs = 16;                                                                    //HIDE
//             const anglePerArc = 360 / numberOfArcs;                                                     //HIDE
//                                                                                                         //HIDE
//             // Calculer la somme totale et le pas de décalage                                           //HIDE
//             const totalSum = values.reduce((sum, v) => sum + v, 0);                                     //HIDE
//             const stepSize = totalSum / (16 * 32);                                                      //HIDE
//                                                                                                         //HIDE
//             const group = document.createElementNS("http://www.w3.org/2000/svg", "g");                  //HIDE
//                                                                                                         //HIDE
//             // Récupérer le centre stocké                                                               //HIDE
//             const centerX = parseFloat(svg.dataset.centerX);                                            //HIDE
//             const centerY = parseFloat(svg.dataset.centerY);                                            //HIDE
//                                                                                                         //HIDE
//             values.forEach((v, i) => {                                                                  //HIDE
//                 if (i >= numberOfArcs) return;                                                          //HIDE
//                                                                                                         //HIDE
//                 // Le rayon de base varie selon v et un nombre pseudo-aléatoire entre 1 et 5            //HIDE
//                 function getNumberFromSeed(seed, min, max) {                                            //HIDE
//                     const random = Math.abs(Math.sin(seed) * 10000);                                    //HIDE
//                     return Math.floor(random % (max - min + 1)) + min;                                  //HIDE
//                 }                                                                                       //HIDE
//                 const baseRadius = v / getNumberFromSeed(centerX, 1, 5);                                //HIDE
//                                                                                                         //HIDE
//                 for (let step = 1; step <= v/32; step++) {                                              //HIDE
//                     const offset = step * stepSize;                                                     //HIDE
//                                                                                                         //HIDE
//                     const startAngle = i * anglePerArc;                                                 //HIDE
//                     const endAngle = startAngle + anglePerArc;                                          //HIDE
//                                                                                                         //HIDE
//                     const startRad = (startAngle - 90) * Math.PI / 180;                                 //HIDE
//                     const endRad = (endAngle - 90) * Math.PI / 180;                                     //HIDE
//                                                                                                         //HIDE
//                     const currentRadius = baseRadius + offset;                                          //HIDE
//                     const startX = centerX + Math.cos(startRad) * currentRadius;                        //HIDE
//                     const startY = centerY + Math.sin(startRad) * currentRadius;                        //HIDE
//                     const endX = centerX + Math.cos(endRad) * currentRadius;                            //HIDE
//                     const endY = centerY + Math.sin(endRad) * currentRadius;                            //HIDE
//                                                                                                         //HIDE
//                     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");        //HIDE
//                     const d = `M ${startX},${startY} A ${currentRadius},${currentRadius} 0 0,1 ${endX},${endY}`;//HIDE
//                                                                                                         //HIDE
//                     path.setAttribute("d", d);                                                          //HIDE
//                     path.setAttribute("stroke", "black");                                               //HIDE
//                     path.setAttribute("stroke-width", ".5");                                            //HIDE
//                     path.setAttribute("fill", "none");                                                  //HIDE
//                     path.setAttribute("opacity", ".8");                                                 //HIDE
//                                                                                                         //HIDE
//                     group.appendChild(path);                                                            //HIDE
//                 }                                                                                       //HIDE
//             });                                                                                         //HIDE
//                                                                                                         //HIDE
//             svg.appendChild(group);                                                                     //HIDE
//         };                                                                                              //HIDE

//         const visualizeState = (state) => {
//             // Si c'est le premier appel, créer le SVG
//             if (!canvasElement.querySelector('svg')) {
//                 const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//                 svg.setAttribute("viewBox", "0 0 148 210");
//                 svg.style.width = "148px";
//                 svg.style.height = "210px";
//                 svg.style.backgroundColor = "#f0f0f0";
                
//                 // Calculer et stocker le centre basé sur les premières valeurs
//                 const centerX = (state[0] / 255) * 148;
//                 const centerY = (state[1] / 255) * 210;
//                 svg.dataset.centerX = centerX;
//                 svg.dataset.centerY = centerY;
//                 svg.dataset.callCount = "0";
                
//                 canvasElement.appendChild(svg);
//             }

//             const svg = canvasElement.querySelector('svg');
//             const centerX = parseFloat(svg.dataset.centerX);
//             const centerY = parseFloat(svg.dataset.centerY);
//             const callCount = parseInt(svg.dataset.callCount);
            
//             // On prend seulement les 16 premières valeurs
//             const values = state.slice(0, 16);
            
//             // Créer un nouveau groupe pour cet ensemble de rayons
//             const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            
//             // Rotation initiale basée sur le nombre d'appels
//             const baseRotation = (callCount * 3) % 360;
            
//             // Paramètres pour les rayons
//             const baseRadius = 20;
//             const angleStep = 360 / 16;
            
//             // Dessiner les 16 rayons
//             values.forEach((v, i) => {
//                 // Calculer l'angle pour ce rayon (incluant la rotation)
//                 const angle = (i * angleStep) + baseRotation;
//                 const rad = (angle - 90) * Math.PI / 180;
                
//                 // Point de départ (sur le cercle imaginaire)
//                 const startX = centerX + Math.cos(rad) * baseRadius;
//                 const startY = centerY + Math.sin(rad) * baseRadius;
                
//                 // Point d'arrivée (longueur proportionnelle à v)
//                 function getNumberFromSeed(seed, min, max) {
//                     const random = Math.abs(Math.sin(seed) * 10000);
//                     return Math.floor(random % (max - min + 1)) + min;
//                 }
//                 const length = v / getNumberFromSeed(centerX, 2, 5);
//                 const endX = centerX + Math.cos(rad) * (baseRadius + length);
//                 const endY = centerY + Math.sin(rad) * (baseRadius + length);
                
//                 // Créer la ligne (rayon)
//                 const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
//                 line.setAttribute("x1", startX);
//                 line.setAttribute("y1", startY);
//                 line.setAttribute("x2", endX);
//                 line.setAttribute("y2", endY);
//                 line.setAttribute("stroke", "black");
//                 line.setAttribute("stroke-width", "0.5");
//                 line.setAttribute("opacity", "0.8");
                
//                 group.appendChild(line);
//             });
            
//             svg.appendChild(group);
            
//             // Incrémenter le compteur d'appels
//             svg.dataset.callCount = (callCount + 1).toString();
//         }

//         const visualizeState = (state) => {
//             // Initialisation du SVG
//             if (!canvasElement.querySelector('svg')) {
//                 const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//                 svg.setAttribute("viewBox", "0 0 148 210");
//                 svg.style.width = "148px";
//                 svg.style.height = "210px";
//                 svg.style.backgroundColor = "#f0f0f0";
                
//                 svg.dataset.prevCenterX = (148/2).toString();
//                 svg.dataset.prevCenterY = (210/2).toString();
//                 svg.dataset.prevRadius = "70";
//                 svg.dataset.callCount = "0";
//                 svg.dataset.directionX = "0";
//                 svg.dataset.directionY = "0";
//                 svg.dataset.prevPoints = "[]";
                
//                 canvasElement.appendChild(svg);
//             }

//             const svg = canvasElement.querySelector('svg');
//             const callCount = parseInt(svg.dataset.callCount);
//             const prevCenterX = parseFloat(svg.dataset.prevCenterX);
//             const prevCenterY = parseFloat(svg.dataset.prevCenterY);
//             const prevRadius = parseFloat(svg.dataset.prevRadius);
//             let prevDirectionX = parseFloat(svg.dataset.directionX);
//             let prevDirectionY = parseFloat(svg.dataset.directionY);
//             const prevPoints = JSON.parse(svg.dataset.prevPoints);
            
//             const newRadius = prevRadius * 0.95;
//             const maxDisplacement = (prevRadius - newRadius) * 1.5;
            
//             // Calcul de l'angle basé sur les valeurs du state
//             const targetDirectionX = ((state[0] / 255) - 0.5) * 2;  // Normalisation entre -1 et 1
//             const targetDirectionY = ((state[1] / 255) - 0.5) * 2;
            
//             const inertia = .6; //.6
//             const newDirectionX = prevDirectionX * inertia + targetDirectionX * (1 - inertia);
//             const newDirectionY = prevDirectionY * inertia + targetDirectionY * (1 - inertia);
            
//             // Calcul de l'angle à partir des directions
//             const angle = Math.atan2(newDirectionY, newDirectionX);
            
//             // Calcul de la nouvelle position du centre pour que le cercle soit tangent
//             const newCenterX = prevCenterX + Math.cos(angle) * (prevRadius - newRadius);
//             const newCenterY = prevCenterY + Math.sin(angle) * (prevRadius - newRadius);
            
//             // Construction du cercle avec points explicites de fermeture
//             const points = [];
//             const numPoints = 32;
            
//             // Facteur de déformation proportionnel au rayon
//             const deformFactor = 0.05; // 5% du rayon
            
//             for (let i = 0; i <= numPoints; i++) {
//                 const angle = (i * (360 / numPoints)) * Math.PI / 180;
//                 const deformIndex = Math.floor((i / numPoints) * 16) % 16;
//                 // La déformation est maintenant proportionnelle au rayon
//                 const deform = ((state[deformIndex] / 255) - 0.5) * 2 * newRadius * deformFactor;
                
//                 const radius = newRadius + deform;
//                 const x = newCenterX + Math.cos(angle) * radius;
//                 const y = newCenterY + Math.sin(angle) * radius;
                
//                 points.push({x, y});
//             }
            
//             // Groupe pour cette itération
//             const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            
//             // Dessin du cercle courant
//             const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//             let d = `M ${points[0].x},${points[0].y}`;
            
//             for (let i = 0; i < points.length - 1; i++) {
//                 const current = points[i];
//                 const next = points[i + 1];
                
//                 const dx = next.x - current.x;
//                 const dy = next.y - current.y;
                
//                 const cp1x = current.x + dx * 0.2;
//                 const cp1y = current.y + dy * 0.2;
//                 const cp2x = next.x - dx * 0.2;
//                 const cp2y = next.y - dy * 0.2;
                
//                 d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${next.x},${next.y}`;
//             }
            
//             d += ' Z';
//             path.setAttribute('d', d);
//             path.setAttribute('stroke', 'black');
//             path.setAttribute('stroke-width', '0.5');
//             path.setAttribute('fill', 'none');
//             group.appendChild(path);
            
//             // Ajout des segments de connexion
//             if (prevPoints.length > 0) {
//                 for (let i = 0; i < points.length - 1; i += 2) {
//                     const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
//                     line.setAttribute('x1', points[i].x.toString());
//                     line.setAttribute('y1', points[i].y.toString());
//                     line.setAttribute('x2', prevPoints[i].x.toString());
//                     line.setAttribute('y2', prevPoints[i].y.toString());
//                     line.setAttribute('stroke', 'black');
//                     line.setAttribute('stroke-width', '0.25');
//                     line.setAttribute('opacity', '0.5');
//                     group.appendChild(line);
//                 }
//             }
            
//             svg.appendChild(group);
            
//             // Mise à jour des données
//             svg.dataset.prevCenterX = newCenterX.toString();
//             svg.dataset.prevCenterY = newCenterY.toString();
//             svg.dataset.prevRadius = newRadius.toString();
//             svg.dataset.directionX = newDirectionX.toString();
//             svg.dataset.directionY = newDirectionY.toString();
//             svg.dataset.prevPoints = JSON.stringify(points);
//             svg.dataset.callCount = (callCount + 1).toString();
//         }
//                                                                                                         //HIDE
//                                                                                                         HIDE
//                                                                                                         HIDE



                                                                                                        
// const visualizeState = (state) => {
//     // Initialisation du SVG
//     if (!canvasElement.querySelector('svg')) {
//         const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//         svg.setAttribute("viewBox", "0 0 148 210");
//         svg.style.width = "148px";
//         svg.style.height = "210px";
//         svg.style.backgroundColor = "#f0f0f0";
        
//         canvasElement.appendChild(svg);
//     }

//     const svg = canvasElement.querySelector('svg');
//     while (svg.firstChild) {
//         svg.removeChild(svg.firstChild);
//     }
    
//     // Marges pour garder la courbe dans les limites
//     const margin = 20;
//     const width = 148 - (2 * margin);
//     const height = 210 - (2 * margin);
    
//     // Organisation des 16 valeurs :
//     // 2 points d'ancrage (4 valeurs)
//     // 3 segments complets avec leurs points de contrôle (12 valeurs)
    
//     const points = [];
    
//     // Premier point d'ancrage (valeurs 0-1)
//     points.push({
//         x: margin + (state[0] / 255) * width,
//         y: margin + (state[1] / 255) * height,
//         control: 0
//     });
    
//     // 3 segments complets (valeurs 2-13)
//     for (let i = 2; i < 14; i += 4) {
//         // Deux points de contrôle pour chaque segment
//         points.push(
//             {
//                 x: margin + (state[i] / 255) * width,
//                 y: margin + (state[i+1] / 255) * height,
//                 control: 1
//             },
//             {
//                 x: margin + (state[i+2] / 255) * width,
//                 y: margin + (state[i+3] / 255) * height,
//                 control: 2
//             }
//         );
//     }
    
//     // Point d'ancrage final (valeurs 14-15)
//     points.push({
//         x: margin + (state[14] / 255) * width,
//         y: margin + (state[15] / 255) * height,
//         control: 0
//     });
    
//     // Créer le path
//     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     let d = `M ${points[0].x},${points[0].y}`;
    
//     // 3 segments de Bézier
//     for (let i = 1; i < points.length - 1; i += 2) {
//         const cp1 = points[i];
//         const cp2 = points[i+1];
//         const end = points[i+2] || points[points.length-1];
//         d += ` C ${cp1.x},${cp1.y} ${cp2.x},${cp2.y} ${end.x},${end.y}`;
//     }
    
//     path.setAttribute('d', d);
//     path.setAttribute('stroke', 'black');
//     path.setAttribute('stroke-width', '.5');
//     path.setAttribute('fill', 'none');
//     svg.appendChild(path);
    
//     // Visualiser les points de contrôle et leurs connexions
//     points.forEach((point, i) => {
//         // Points de contrôle en rouge, points d'ancrage en noir
//         const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//         circle.setAttribute('cx', point.x);
//         circle.setAttribute('cy', point.y);
//         circle.setAttribute('r', point.control ? 3 : 3);
//         circle.setAttribute('stroke', 'black');
//         circle.setAttribute('fill', 'none');
//         circle.setAttribute('stroke-width', '.5');
//         svg.appendChild(circle);
        
//         // Lignes de contrôle en gris clair
//         if (point.control === 1) {
//             const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
//             line.setAttribute('x1', points[i-1].x);
//             line.setAttribute('y1', points[i-1].y);
//             line.setAttribute('x2', point.x);
//             line.setAttribute('y2', point.y);
//             line.setAttribute('stroke', 'black');
//             line.setAttribute('stroke-width', '.5');
//             svg.appendChild(line);
//         }
//         if (point.control === 2) {
//             const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
//             line.setAttribute('x1', point.x);
//             line.setAttribute('y1', point.y);
//             line.setAttribute('x2', points[i+1].x);
//             line.setAttribute('y2', points[i+1].y);
//             line.setAttribute('stroke', 'black');
//             line.setAttribute('stroke-width', '.5');
//             svg.appendChild(line);
//         }
//     });
// }