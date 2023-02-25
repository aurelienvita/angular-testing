import type { AfterViewInit, ElementRef, OnInit } from '@angular/core'
import { Component, Input, ViewChild } from '@angular/core'
import { Icon, map, marker, tileLayer } from 'leaflet'
import * as L from 'leaflet'

@Component({
  selector: 'app-lmap',
  templateUrl: './lmap.component.html',
  styleUrls: ['./lmap.component.scss'],
})
export class LMapComponent implements OnInit, AfterViewInit {
  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement> | undefined

  private map: L.Map | undefined

  @Input()
  public position: L.LatLngExpression = [45.7604145, 3.1312821]

  @Input()
  public markers: L.LatLngExpression[] = []

  @Input()
  public options: L.MapOptions = {
    zoom: 6,
  }

  constructor() {
  } // TODO : Implémenter les slots pour intégrer les markers

  /**
   * Initialise la carte Leaflet
   * @private
   */
  private _initMap(): void {
    if (this.mapContainer) {
      this.map = map(this.mapContainer.nativeElement, { ...this.options, center: this.position })
      const tiles = tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png', { attribution: '©OpenStreetMap, ©CartoDB' }) /* const tiles = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {        maxZoom: 18,        minZoom: 3,        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',      }) */
      tiles.addTo(this.map)
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 1000)
    }
  }

  ngAfterViewInit(): void {
    this._initMap()
    this._initMarkers(this.markers)
  }

  ngOnInit(): void {
  }

  /**
   * Place les markers sur la carte
   * @param markers
   * @private
   */
  private _initMarkers(markers: L.LatLngExpression[]): void {
    if (this.markers.length > 0 && this.map) {
      const icon = new Icon.Default()
      icon.options.shadowSize = [0, 0]

      // const markerLayer: L.FeatureGroup = new L.FeatureGroup().addTo(this.map)
      // TODO : Placer les markers
      for (const position of markers) {
        const leafletMarker = marker(position, { icon })
        leafletMarker.addTo(this.map)
      }
    }
  }

  /**
   * Adapte la zone d'affichage de la carte automatiquement en fonction des markers
   * Ne fonctionne pas pour le moment
   *
   * Il faudrait mieux essayer d'utiliser ngx-leaflet
   * https://github.com/bluehalo/ngx-leaflet
   * @param markers
   * @private
   */
  private _fitBounds(markers: L.LatLngExpression[]): void {
    if (markers.length > 1 && this.map) {
      const latlngBounds = L.latLngBounds(markers)
      this.map.fitBounds(latlngBounds)
    }
  }
}
