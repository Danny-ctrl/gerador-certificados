import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ItemCertificado } from './item-certificado';

@Component({ selector: 'app-secondary-button', template: `<button>{{textoBotao}}</button>` })
class StubSecondaryButton {
  @Input() textoBotao: string = '';
  @Input() phClass: string = '';
  @Input() disabled: boolean = false;
}

describe('ItemCertificado', () => {
  let component: ItemCertificado;
  let fixture: ComponentFixture<ItemCertificado>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ItemCertificado, StubSecondaryButton],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCertificado);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nomeAluno and dataEmissao', () => {
    component.nomeAluno = 'João Silva';
    component.dataEmissao = '2025-12-18';
    fixture.detectChanges();

    const nomeEl: HTMLElement = fixture.debugElement.query(By.css('.nome-aluno')).nativeElement;
    const dateEl: HTMLElement = fixture.debugElement.query(By.css('.small-date')).nativeElement;

    expect(nomeEl.textContent).toContain('João Silva');
    expect(dateEl.textContent).toContain('2025-12-18');
  });

  it('should render secondary button with textoBotao="Ver"', () => {
    fixture.detectChanges();
    const btn: HTMLElement | null = fixture.debugElement.query(By.css('app-secondary-button button'))?.nativeElement || null;
    expect(btn).withContext('secondary button should be present').not.toBeNull();
    expect(btn!.textContent!.trim()).toBe('Ver');
  });

  it('should navigate to certificate page when button is clicked', () => {
    component.id = 'abc123';
    fixture.detectChanges();

    const btn: HTMLElement = fixture.debugElement.query(By.css('app-secondary-button button')).nativeElement;
    btn.click();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/certificados', 'abc123']);
  });

  it('redirectToCertificado should call router.navigate with the component id', () => {
    component.id = 'id-42';
    component.redirectToCertificado();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/certificados', 'id-42']);
  });
});
