import{r as l,j as d}from"./index-CxOF7uer.js";import{R as re,I as ae,F as V,a as H,b as B,W as ce,B as W,S as Y,V as E,c as le,U as F,d as k,e as Z,M as de,f as z,L as ue,g as fe,h as ee,u as pe,C as he,_ as q,i as T,j as me,k as ve,E as ge,D as ye}from"./react-three-fiber.esm-CtEsHpyB.js";function xe(r){return function(e){r.forEach(function(t){typeof t=="function"?t(e):t!=null&&(t.current=e)})}}const te=parseInt(re.replace(/\D+/g,"")),ne=te>=125?"uv1":"uv2",$=new W,O=new E;class N extends ae{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new V(e,3)),this.setAttribute("uv",new V(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,s=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),s.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const s=new H(t,6,1);return this.setAttribute("instanceStart",new B(s,3,0)),this.setAttribute("instanceEnd",new B(s,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let s;e instanceof Float32Array?s=e:Array.isArray(e)&&(s=new Float32Array(e));const n=new H(s,t*2,1);return this.setAttribute("instanceColorStart",new B(n,t,0)),this.setAttribute("instanceColorEnd",new B(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ce(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new W);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),$.setFromBufferAttribute(t),this.boundingBox.union($))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Y),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let n=0;for(let i=0,a=e.count;i<a;i++)O.fromBufferAttribute(e,i),n=Math.max(n,s.distanceToSquared(O)),O.fromBufferAttribute(t,i),n=Math.max(n,s.distanceToSquared(O));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class ie extends N{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,s=new Float32Array(2*t);for(let n=0;n<t;n+=3)s[2*n]=e[n],s[2*n+1]=e[n+1],s[2*n+2]=e[n+2],s[2*n+3]=e[n+3],s[2*n+4]=e[n+4],s[2*n+5]=e[n+5];return super.setPositions(s),this}setColors(e,t=3){const s=e.length-t,n=new Float32Array(2*s);if(t===3)for(let i=0;i<s;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<s;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class G extends le{constructor(e){super({type:"LineMaterial",uniforms:F.clone(F.merge([k.common,k.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Z(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${te>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const R=new z,J=new E,X=new E,h=new z,m=new z,w=new z,P=new E,I=new fe,v=new ue,K=new E,D=new W,j=new Y,b=new z;let _,A;function Q(r,e,t){return b.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),b.multiplyScalar(1/b.w),b.x=A/t.width,b.y=A/t.height,b.applyMatrix4(r.projectionMatrixInverse),b.multiplyScalar(1/b.w),Math.abs(Math.max(b.x,b.y))}function Se(r,e){const t=r.matrixWorld,s=r.geometry,n=s.attributes.instanceStart,i=s.attributes.instanceEnd,a=Math.min(s.instanceCount,n.count);for(let o=0,c=a;o<c;o++){v.start.fromBufferAttribute(n,o),v.end.fromBufferAttribute(i,o),v.applyMatrix4(t);const y=new E,g=new E;_.distanceSqToSegment(v.start,v.end,g,y),g.distanceTo(y)<A*.5&&e.push({point:g,pointOnLine:y,distance:_.origin.distanceTo(g),object:r,face:null,faceIndex:o,uv:null,[ne]:null})}}function we(r,e,t){const s=e.projectionMatrix,i=r.material.resolution,a=r.matrixWorld,o=r.geometry,c=o.attributes.instanceStart,y=o.attributes.instanceEnd,g=Math.min(o.instanceCount,c.count),f=-e.near;_.at(1,w),w.w=1,w.applyMatrix4(e.matrixWorldInverse),w.applyMatrix4(s),w.multiplyScalar(1/w.w),w.x*=i.x/2,w.y*=i.y/2,w.z=0,P.copy(w),I.multiplyMatrices(e.matrixWorldInverse,a);for(let p=0,x=g;p<x;p++){if(h.fromBufferAttribute(c,p),m.fromBufferAttribute(y,p),h.w=1,m.w=1,h.applyMatrix4(I),m.applyMatrix4(I),h.z>f&&m.z>f)continue;if(h.z>f){const U=h.z-m.z,L=(h.z-f)/U;h.lerp(m,L)}else if(m.z>f){const U=m.z-h.z,L=(m.z-f)/U;m.lerp(h,L)}h.applyMatrix4(s),m.applyMatrix4(s),h.multiplyScalar(1/h.w),m.multiplyScalar(1/m.w),h.x*=i.x/2,h.y*=i.y/2,m.x*=i.x/2,m.y*=i.y/2,v.start.copy(h),v.start.z=0,v.end.copy(m),v.end.z=0;const C=v.closestPointToPointParameter(P,!0);v.at(C,K);const u=ee.lerp(h.z,m.z,C),M=u>=-1&&u<=1,oe=P.distanceTo(K)<A*.5;if(M&&oe){v.start.fromBufferAttribute(c,p),v.end.fromBufferAttribute(y,p),v.start.applyMatrix4(a),v.end.applyMatrix4(a);const U=new E,L=new E;_.distanceSqToSegment(v.start,v.end,L,U),t.push({point:L,pointOnLine:U,distance:_.origin.distanceTo(L),object:r,face:null,faceIndex:p,uv:null,[ne]:null})}}}class se extends de{constructor(e=new N,t=new G({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,s=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)J.fromBufferAttribute(t,a),X.fromBufferAttribute(s,a),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+J.distanceTo(X);const i=new H(n,2,1);return e.setAttribute("instanceDistanceStart",new B(i,1,0)),e.setAttribute("instanceDistanceEnd",new B(i,1,1)),this}raycast(e,t){const s=this.material.worldUnits,n=e.camera;n===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=e.params.Line2!==void 0&&e.params.Line2.threshold||0;_=e.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;A=c.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),j.copy(o.boundingSphere).applyMatrix4(a);let y;if(s)y=A*.5;else{const f=Math.max(n.near,j.distanceToPoint(_.origin));y=Q(n,f,c.resolution)}if(j.radius+=y,_.intersectsSphere(j)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),D.copy(o.boundingBox).applyMatrix4(a);let g;if(s)g=A*.5;else{const f=Math.max(n.near,D.distanceToPoint(_.origin));g=Q(n,f,c.resolution)}D.expandByScalar(g),_.intersectsBox(D)!==!1&&(s?Se(this,t):we(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(R),this.material.uniforms.resolution.value.set(R.z,R.w))}}class be extends se{constructor(e=new ie,t=new G({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const _e=l.forwardRef(function({points:e,color:t="black",vertexColors:s,linewidth:n,lineWidth:i,segments:a,dashed:o,...c},y){const g=pe(S=>S.size),f=l.useMemo(()=>a?new se:new be,[a]),[p]=l.useState(()=>new G),x=l.useMemo(()=>{const S=a?new N:new ie,C=e.map(u=>{const M=Array.isArray(u);return u instanceof E?[u.x,u.y,u.z]:u instanceof Z?[u.x,u.y,0]:M&&u.length===3?[u[0],u[1],u[2]]:M&&u.length===2?[u[0],u[1],0]:u});if(S.setPositions(C.flat()),s){const u=s.map(M=>M instanceof he?M.toArray():M);S.setColors(u.flat())}return S},[e,a,s]);return l.useLayoutEffect(()=>{f.computeLineDistances()},[e,f]),l.useLayoutEffect(()=>{o?p.defines.USE_DASH="":delete p.defines.USE_DASH,p.needsUpdate=!0},[o,p]),l.useEffect(()=>()=>x.dispose(),[x]),l.createElement("primitive",q({object:f,ref:y},c),l.createElement("primitive",{object:x,attach:"geometry"}),l.createElement("primitive",q({object:p,attach:"material",color:t,vertexColors:!!s,resolution:[g.width,g.height],linewidth:n??i,dashed:o},c)))}),Ee=l.forwardRef(({children:r,enabled:e=!0,speed:t=1,rotationIntensity:s=1,floatIntensity:n=1,floatingRange:i=[-.1,.1],...a},o)=>{const c=l.useRef(null),y=l.useRef(Math.random()*1e4);return T(g=>{var f,p;if(!e||t===0)return;const x=y.current+g.clock.getElapsedTime();c.current.rotation.x=Math.cos(x/4*t)/8*s,c.current.rotation.y=Math.sin(x/4*t)/8*s,c.current.rotation.z=Math.sin(x/4*t)/20*s;let S=Math.sin(x/4*t)/10;S=ee.mapLinear(S,-.1,.1,(f=i==null?void 0:i[0])!==null&&f!==void 0?f:-.1,(p=i==null?void 0:i[1])!==null&&p!==void 0?p:.1),c.current.position.y=S*n,c.current.updateMatrix()}),l.createElement("group",a,l.createElement("group",{ref:xe([c,o]),matrixAutoUpdate:!1},r))});function Me({position:r=[0,0,0]}){const e=l.useRef(null),t=l.useRef(null);T(i=>{e.current&&(e.current.rotation.x=i.clock.elapsedTime*.08,e.current.rotation.y=i.clock.elapsedTime*.12),t.current&&(t.current.rotation.x=i.clock.elapsedTime*.08,t.current.rotation.y=i.clock.elapsedTime*.12)});const s=l.useMemo(()=>new ve(1.8,1),[]),n=l.useMemo(()=>new ge(s),[s]);return d.jsxs("group",{position:r,children:[d.jsx("mesh",{ref:e,geometry:s,children:d.jsx("meshBasicMaterial",{color:"#2D3561",transparent:!0,opacity:.03,side:ye})}),d.jsx("lineSegments",{ref:t,geometry:n,children:d.jsx("lineBasicMaterial",{color:"#2D3561",transparent:!0,opacity:.4})})]})}function Le(){const r=l.useRef(null),e=40,t=l.useMemo(()=>{const s=[];for(let n=0;n<e;n++){const i=n/e*Math.PI*2,a=2.5+Math.sin(n*.5)*.5,o=Math.cos(n*.3)*1.2;s.push([Math.cos(i)*a,o,Math.sin(i)*a])}return s},[]);return T(s=>{r.current&&(r.current.rotation.y=s.clock.elapsedTime*.05,r.current.rotation.x=Math.sin(s.clock.elapsedTime*.02)*.1)}),d.jsx("group",{ref:r,children:t.map((s,n)=>d.jsxs("mesh",{position:s,children:[d.jsx("sphereGeometry",{args:[.02+Math.random()*.02,8,8]}),d.jsx("meshBasicMaterial",{color:n%3===0?"#C4956A":"#2D3561",transparent:!0,opacity:.3+Math.random()*.4})]},n))})}function Ae(){const r=l.useRef(null),e=12,t=l.useMemo(()=>{const s=[];for(let n=0;n<e;n++){const i=n/e*Math.PI*2,a=(n+3)/e*Math.PI*2,o=1.5+Math.random()*.5,c=1.5+Math.random()*.5;s.push([[Math.cos(i)*o,Math.sin(i*2)*.8,Math.sin(i)*o],[Math.cos(a)*c,Math.sin(a*2)*.8,Math.sin(a)*c]])}return s},[]);return T(s=>{r.current&&(r.current.rotation.y=s.clock.elapsedTime*.03)}),d.jsx("group",{ref:r,children:t.map((s,n)=>d.jsx(_e,{points:s,color:"#2D3561",lineWidth:.5,transparent:!0,opacity:.15},n))})}function Ue(){return d.jsxs(d.Fragment,{children:[d.jsx("ambientLight",{intensity:.5}),d.jsx(Ee,{speed:1.5,rotationIntensity:.2,floatIntensity:.3,children:d.jsx(Me,{})}),d.jsx(Le,{}),d.jsx(Ae,{})]})}function Ce(){return d.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{opacity:.7},children:d.jsx(me,{camera:{position:[0,0,6],fov:45},dpr:[1,1.5],gl:{antialias:!0,alpha:!0},style:{background:"transparent"},children:d.jsx(l.Suspense,{fallback:null,children:d.jsx(Ue,{})})})})}export{Ce as default};
