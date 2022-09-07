<template>
    <section class="pdf-content">
        <section class="report-info">
            <section class="image-container">
                <!-- // <img
                //     class="user-image"
                //     :src="require('@/assets/axe.jpg')"
                //     alt="User Image"
				// 	ref="userImage"
                // > -->
            </section>

            <section class="user-details">
                <h4 class="user-name">
                    DMTLABS
                </h4>

                <span class="detail-container">
                    <span class="detail-label"></span>
                </span>

                <span class="detail-container" >
                    <span class="detail-label"></span>
                </span>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    data () {
		return {
			chartOptions: {
				dataLabels: {
                    enabled: false,
                    
					style: {
						colors: ['#fff']
					}
                },
                
				stroke: {
					curve: 'smooth'
                },
                
				chart: {
					toolbar: {
                        show: false,
                        
						tools: {
							download: false,
						},
                    },
                    
                    animations: {
                        enabled: false,

                        animateGradually: {
                            enabled: false
                        },

                        dynamicAnimation: {
                            enabled: false
                        }
                    },
                },
                
				tooltip: {
					enabled: true,
					// theme: true,
					x: {
						show: true,
						format: 'MMM dd, yyyy HH:mm'
					},
                },
                
				legend: {
					show: true,
					labels: {
						useSeriesColors: false
					},
					onItemClick: {
						toggleDataSeries: false
					},
					onItemHover: {
						highlightDataSeries: true
					},
                },
                
				xaxis: {
					labels: {
						style: {
							// colors: '#fff',
                        }
                    },
                    
					type: 'datetime'
                },
                
				yaxis: {
					labels: {
						style: {
							// color: '#fff',
                        },
                        
						formatter: (value) => {
							return value
						},
                    },
                    
					type: 'text'
				}
			}
		}
    },
    
    mounted () {
		this.$nextTick(() => {
            setTimeout(() => {
                this.$emit('domRendered')
            }, 1000);
		})
	},
}
</script>